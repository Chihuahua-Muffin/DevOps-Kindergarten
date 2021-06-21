// You can ref below link how to make context using Typescript
// https://react.vlpt.us/using-typescript/04-ts-context.html
import React, {
  useReducer,
  useContext,
  createContext,
  Dispatch,
} from 'react';

import {
  LOGIN_ACTION,
  LOGOUT_ACTION,
} from '#/constants';

interface LoginState {
  isLogin: boolean;
  username: string;
}

type LoginAction =
  | { type: typeof LOGIN_ACTION; username: string }
  | { type: typeof LOGOUT_ACTION; };

type LoginDispatch = Dispatch<LoginAction>;

const LoginStateContext = createContext<LoginState | null>(null);
const LoginDispatchContext = createContext<LoginDispatch | null>(null);

// Reducer
function reducer(state: LoginState, action: LoginAction): LoginState {
  switch (action.type) {
    case LOGIN_ACTION:
      return {
        ...state,
        username: action.username,
        isLogin: true,
      };
    case LOGOUT_ACTION:
      return {
        ...state,
        username: '',
        isLogin: false,
      };
    default:
      throw new Error('Unhandled action');
  }
}

// Provider
export function LoginProvider({ children }: { children: React.ReactNode }): JSX.Element {
  const [state, dispatch] = useReducer(reducer, {
    isLogin: false,
    username: '',
  });

  return (
    <LoginStateContext.Provider value={state}>
      <LoginDispatchContext.Provider value={dispatch}>
        {children}
      </LoginDispatchContext.Provider>
    </LoginStateContext.Provider>
  );
}

// State hook
export function useLoginState(): LoginState {
  const state = useContext(LoginStateContext);
  if (!state) throw new Error('Cannot find useCSVFileImportState'); // If invalid, Then throw the error.
  return state;
}

// Dispatch hook
export function useLoginDispatch(): Dispatch<LoginAction> {
  const dispatch = useContext(LoginDispatchContext);
  if (!dispatch) throw new Error('Cannot find useCSVFileImportDispatch'); // If invalid, Then throw the error.
  return dispatch;
}
