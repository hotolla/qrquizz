import { PropsWithChildren, createContext, useEffect, useReducer } from 'react';
import { IUser } from '@/modules/users';
import { initialState, IAuthState } from './initialState';
import { reducer } from './reducer';
import { Types } from './types';

export interface ILoginPayload {
  user: IUser,
  token?: string
}

interface IAuthProviderValues extends IAuthState {
  isAuthenticated: boolean;
  login: (payload: ILoginPayload) => void;
}

export const AuthContext = createContext<IAuthProviderValues>({
  ...initialState,

  login: () => {},
});

const localStorageKey = 'auth';

export const AuthProvider = ({ children } : PropsWithChildren) => {
  const [ state, dispatch ] = useReducer(reducer, initialState, () => {
    if (typeof window !== 'undefined') {
      const localStorageData = JSON.parse(localStorage?.getItem(localStorageKey) || '{}');

      return localStorageData || initialState;
    }
    return initialState;
  });

  const login = (payload: ILoginPayload) => {
    console.log(payload)
    dispatch({ type: Types.Login, payload: payload.user });
  };

  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(state));
  }, [ state ]);

  return (
    <AuthContext.Provider
      value={{
        ...state,

        login,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
