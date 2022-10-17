import { createContext } from 'react';

export interface AuthContext {
  token: string;
  isLoggedIn: boolean;
  saveToken: (token: string) => void;
}

export const AuthContext = createContext<AuthContext>({
  token: '',
  isLoggedIn: false,
  saveToken: () => {},
});
