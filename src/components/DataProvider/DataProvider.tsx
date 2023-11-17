import {PropsWithChildren, createContext, useEffect, useReducer, useRef} from 'react';
import { reducer } from './reducer';
import { Types } from './types';
import { IData } from "@/components/DataProvider/types";
import { initialState } from "@/components/DataProvider/initialState";
import * as dataApi from "../../api/data";

interface IDataProviderValues extends IData {
  fetchData: (data: IData) => void;
}

export const DataContext = createContext<IDataProviderValues>({
  ...initialState,

  fetchData: () => {}
});

export const DataProvider = ({ children } : PropsWithChildren) => {
  const [ state, dispatch ] = useReducer(reducer, initialState);
  const fetchTasksAbortController = useRef(new AbortController());

  const fetchData = () => {
    dataApi.fetchData({
      params: {
        data: initialState,
      },
      signal: fetchTasksAbortController.current.signal
    }).then((data) => {
      dispatch({ type: Types.FetchData, payload: data });
    }).catch((error) => {
      return error
    });
  };

  const providerValue = {
    ...state,

    fetchData
  };

  useEffect(() => {
    fetchData();

    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      fetchTasksAbortController.current.abort();
    };
  }, []);

  return (
    <DataContext.Provider
      value={{
        ...state,

        fetchData
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
