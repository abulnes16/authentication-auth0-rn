import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HOME_SCREEN } from '../screens-names';
import { HomeScreen } from 'screens';
import { colors, navigationStyles } from 'theme';

const HomeStack = createNativeStackNavigator<HomeStackParams>();

const HomeNavigator = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        options={{
          headerStyle: navigationStyles.header,
          headerTintColor: colors.white,
          title: 'Home',
        }}
        name={HOME_SCREEN}
        component={HomeScreen}
      />
    </HomeStack.Navigator>
  );
};

export default HomeNavigator;
