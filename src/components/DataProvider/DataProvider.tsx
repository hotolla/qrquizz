import { PropsWithChildren, createContext, useEffect, useReducer, useRef } from 'react';
import { reducer } from './reducer';
import { Types } from './types';
import { IData } from "@/components/DataProvider/types";
import { initialState } from "@/components/DataProvider/initialState";
import * as dataApi from "../../api/data";

interface IDataProviderValues extends IData {
  fetchEventData: () => void;
}

export const DataContext = createContext<IDataProviderValues>({
  ...initialState,

  fetchEventData: () => {}
});

export const DataProvider = ({ children } : PropsWithChildren) => {
  const [ state, dispatch ] = useReducer(reducer, initialState);
  const fetchTasksAbortController = useRef(new AbortController());

  const fetchEventData = () => {
    dataApi.fetchEventData().then((dataEvent) => {
      dispatch({ type: Types.FetchData, payload: dataEvent });
    })
  };

  const providerValue = {
    ...state,

    fetchEventData
  };

  useEffect(() => {
    fetchEventData();

    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      fetchTasksAbortController.current.abort();
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
