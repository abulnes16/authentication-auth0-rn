import { useState } from 'react';
import { AuthContext, LoginMethods } from './AuthContext';

export const AuthProvider: React.FC<any> = ({ children }) => {
  const [token, setToken] = useState('');
  const [loginMethod, setLoginMethod] = useState<LoginMethods>(
    LoginMethods.none,
  );
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const saveToken = (token: string, method: LoginMethods) => {
    setToken(token);
    setIsLoggedIn(true);
    setLoginMethod(method);
  };

  const clearSession = () => {
    setToken('');
    setIsLoggedIn(false);
    setLoginMethod(LoginMethods.none);
  };

  return (
    <AuthContext.Provider
      value={{ token, isLoggedIn, saveToken, loginMethod, clearSession }}>
      {children}
    </AuthContext.Provider>
  );
};
