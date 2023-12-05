import { PropsWithChildren, createContext, useEffect, useReducer, useRef } from 'react';
import { reducer } from './reducer';
import { IState, Types } from './types';
import { IEvent } from "@/components/DataProvider/types";
import { initialState } from "@/components/DataProvider/initialState";
import * as dataApi from "../../api/data";

export type EventId = number | string

interface IDataProviderValues extends IState {
  fetchEvent: (id: EventId) => void;
}

export const DataContext = createContext<IDataProviderValues>({
  ...initialState,

  fetchEvent: () => {}
});

const sessionStorageKey = 'eventId';

export const DataProvider = ({ children } : PropsWithChildren) => {
  const fetchEventAbortController = useRef(new AbortController());
  const [ state, dispatch ] = useReducer(reducer, initialState, () => {

  if (typeof window !== 'undefined') {
    const sessionStorageData = JSON.parse(sessionStorage?.getItem(sessionStorageKey) || '{}');
    return sessionStorageData || initialState;
  }
  return initialState;
});

  const fetchEvent = (id: EventId) => {
    dataApi.fetchEvent(id, {
      signal: fetchEventAbortController.current.signal
    }).then((event) => {
      dispatch({ type: Types.FetchData, payload: event });
    })
  };

  const providerValue = {
    ...state,

    fetchEvent
  };

  useEffect(() => {
    sessionStorage.setItem(sessionStorageKey, JSON.stringify(state.event?.id));
    // return () => {
    //   fetchEventAbortController.current.abort();
    // };
  }, [ state ]);

  return (
    <DataContext.Provider
      value={providerValue}
    >
      {children}
    </DataContext.Provider>
  );
};
