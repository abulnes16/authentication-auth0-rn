import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NATIVE_LOGIN_SCREEN, WELCOME_SCREEN } from '../screens-names';
import { NativeLoginScreen, WelcomeScreen } from '../../screens';

const AuthStack = createNativeStackNavigator<AuthStackParams>();

const AuthNavigator = () => {
  return (
    <AuthStack.Navigator initialRouteName={WELCOME_SCREEN}>
      <AuthStack.Screen
        options={{ headerShown: false }}
        name={WELCOME_SCREEN}
        component={WelcomeScreen}
      />
      <AuthStack.Screen
        name={NATIVE_LOGIN_SCREEN}
        component={NativeLoginScreen}
      />
    </AuthStack.Navigator>
  );
};

export default AuthNavigator;
