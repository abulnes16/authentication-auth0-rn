import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HOME_SCREEN } from '../screens-names';
import { HomeScreen } from '../../screens';

const HomeStack = createNativeStackNavigator<HomeStackParams>();

const HomeNavigator = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name={HOME_SCREEN} component={HomeScreen} />
    </HomeStack.Navigator>
  );
};

export default HomeNavigator;
