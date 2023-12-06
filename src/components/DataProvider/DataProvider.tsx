import { PropsWithChildren, createContext, useEffect, useReducer, useRef } from 'react';
import { reducer } from './reducer';
import { IState, Types } from './types';
import { IEvent } from "@/components/DataProvider/types";
import { initialState } from "@/components/DataProvider/initialState";
import * as dataApi from "../../api/data";
import {fetchLocationId} from "../../api/data";

export type EventId = number | string
export type LocationId = number | string

interface IDataProviderValues extends IState {
  fetchEvent: (id: EventId) => void;
  fetchLocationId: (id: LocationId) => void;
}

export const DataContext = createContext<IDataProviderValues>({
  ...initialState,

  fetchEvent: () => {},
  fetchLocationId: () => {}
});

const localStorageKey = 'eventId';

export const DataProvider = ({ children } : PropsWithChildren) => {
  const fetchEventAbortController = useRef(new AbortController());
  const [ state, dispatch ] = useReducer(reducer, initialState, () => {
  //ask about localStorage
  // if (typeof window !== 'undefined') {
  //   const localStorageData = JSON.parse(localStorage?.getItem(localStorageKey) || '{}');
  //   return localStorageData || initialState;
  // }
  return initialState;
});

  const fetchEvent = (id: EventId) => {
    dataApi.fetchEvent(id, {
      signal: fetchEventAbortController.current.signal
    }).then((event) => {
      dispatch({ type: Types.FetchData, payload: event });
    })
  };

  const fetchLocationId = (id: LocationId) => {
    dataApi.fetchLocationId(id, {
      signal: fetchEventAbortController.current.signal
    }).then((event) => {
      // add reducer, check db.json
      dispatch({ type: Types.FetchData, payload: event });
    })
  };

  const providerValue = {
    ...state,

    fetchEvent,
    fetchLocationId
  };

  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(state.event?.id));
    return () => {
      fetchEventAbortController.current.abort();
    };
  }, [ state ]);

  return (
    <DataContext.Provider
      value={providerValue}
    >
      {children}
    </DataContext.Provider>
  );
};
