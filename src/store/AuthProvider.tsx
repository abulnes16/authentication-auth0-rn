import { useState } from 'react';
import { AuthContext } from './AuthContext';

export const AuthProvider: React.FC<any> = ({ children }) => {
  const [token, setToken] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const saveToken = (token: string) => {
    setToken(token);
    setIsLoggedIn(isLoggedIn);
  };

  return (
    <AuthContext.Provider value={{ token, isLoggedIn, saveToken }}>
      {children}
    </AuthContext.Provider>
  );
};
