import { IEvent, IState, Types } from './types';

export type Action =
  | { type: Types.FetchEvent; payload: IEvent }
  | { type: Types.FetchLocationId; payload: IEvent }

export const reducer = (state: IState, { type, payload }: Action) => {
  switch (type) {
    case Types.FetchEvent:
      return {
        ...state,

        event: payload
      };

      case Types.FetchLocationId:
      return {
        ...state,

        event: payload
      };

    default:
      return state;
    }
};
