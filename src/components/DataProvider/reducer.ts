import { IEvent, IState, Types } from './types';

export type Action =
  | { type: Types.FetchData; payload: IEvent }

export const reducer = (state: IState, { type, payload }: Action) => {
  switch (type) {
    case Types.FetchData:
      return {
        ...state,

        event: payload
      };

    default:
      return state;
    }
};
