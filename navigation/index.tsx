import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { ColorSchemeName } from 'react-native';

import NotFoundScreen from '../screens/NotFoundScreen';
import { RootStackParamList } from '../types';
import BottomTabNavigator from './BottomTabNavigator';
import LinkingConfiguration from './LinkingConfiguration';
import DrawerNavigator from './DrawerNavigator';
import SplashScreen from '../src/screens/Auth/SplashScreen';
import LoginScreen from '../src/screens/Auth/LoginScreen';
import LoginContainer from '../src/containers/Auth/LoginContainer';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Drawer">
      {/* <Stack.Screen name="Root" component={BottomTabNavigator} /> */}
      <Stack.Screen name="Drawer" component={DrawerNavigator} />
      <Stack.Screen name="Splash" component={SplashScreen}></Stack.Screen>
      <Stack.Screen name="Login" component={LoginContainer}></Stack.Screen>
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
    </Stack.Navigator>
  );
}
