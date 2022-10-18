import React from 'react';
import { useAuth } from 'hooks';
import AuthNavigator from './auth';
import HomeNavigator from './home';

const MainNavigator = () => {
  const { isLoggedIn } = useAuth();

  if (isLoggedIn) {
    return <HomeNavigator />;
  }

  return <AuthNavigator />;
};

export default MainNavigator;
