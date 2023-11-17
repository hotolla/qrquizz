import { IData, Types } from './types';

export type Action =
  | { type: Types.FetchData; payload: IData }

export const reducer = (state: IData, { type }: Action) => {
  switch (type) {
  case Types.FetchData:
    return {
      ...state,
    };

  default:
    return state;
  }
};
