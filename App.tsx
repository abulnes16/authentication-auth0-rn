import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainNavigator from './src/navigation';
import { AuthProvider } from './src/store';

const App = () => {
  return (
    <NavigationContainer>
      <AuthProvider>
        <MainNavigator />
      </AuthProvider>
    </NavigationContainer>
  );
};

export default App;
