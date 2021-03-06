import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Tabs from './Tabs';

import Splash from '../screens/Splash';

export const navigationRef = React.createRef();

const RootStack = createStackNavigator();

const RootNavigation = () => {
  return (
    <RootStack.Navigator headerMode={'none'}>
      <RootStack.Screen name={'Splash'} component={Splash} />
      <RootStack.Screen
        component={Tabs}
        name={'Tabs'}
        options={{headerShown: false}}
      />
    </RootStack.Navigator>
  );
};

export default () => (
  <NavigationContainer ref={navigationRef}>
    <RootNavigation />
  </NavigationContainer>
);

export const navigate = (name, params) => {
  navigationRef.current
    ? navigationRef.current.navigate(name, params)
    : undefined;
};
