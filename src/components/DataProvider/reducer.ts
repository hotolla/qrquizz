import { IData, Types } from './types';

export type Action =
  | { type: Types.FetchData; payload: IData }

export const reducer = (state: IData, { type, payload }: Action) => {
  switch (type) {
  case Types.FetchData:
    return {
      ...state,

      map: payload.map,
      designType: payload.designType,
      pointsList: payload.pointsList,
      loginMessage: payload.loginMessage,
      descriptionMessage: payload.descriptionMessage
    };

  default:
    return state;
  }
};
