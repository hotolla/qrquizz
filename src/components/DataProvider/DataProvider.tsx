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

export const DataProvider = ({ children } : PropsWithChildren) => {
  const [ state, dispatch ] = useReducer(reducer, initialState);
  const fetchEventAbortController = useRef(new AbortController());

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
    return () => {
      fetchEventAbortController.current.abort();
    };
  }, []);

  return (
    <DataContext.Provider
      value={providerValue}
    >
      {children}
    </DataContext.Provider>
  );
};
