import { 
  NavigationContainer, 
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as DefaultNavigationTheme
} from '@react-navigation/native';
import { 
  Provider as PaperProvider, 
  DefaultTheme as PaperDefaultTheme,
  DarkTheme as PaperDarkTheme 
} from 'react-native-paper'
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { ColorSchemeName } from 'react-native';

import NotFoundScreen from '../screens/NotFoundScreen';
import { RootStackParamList } from '../types';
import LinkingConfiguration from './LinkingConfiguration';
import DrawerNavigator from './DrawerNavigator';
import SplashScreen from '../src/screens/Auth/SplashScreen';
import LoginContainer from '../src/containers/Auth/LoginContainer';
import LocationHeader from '../src/components/Header';

const CustomDarkTheme = {
  ...DefaultNavigationTheme,
  ...PaperDefaultTheme,
  colors: {
    ...DefaultNavigationTheme.colors,
    ...PaperDefaultTheme.colors,
    background: '#303030',  
    text: '#707070',
    primary: "#303030"
  }
}

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <PaperProvider theme={CustomDarkTheme}>
      <NavigationContainer
        linking={LinkingConfiguration}
        theme={CustomDarkTheme}>
        <RootNavigator />
      </NavigationContainer>
    </PaperProvider>
  );
}

const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator initialRouteName="Splash">
      {/* <Stack.Screen name="Root" component={BottomTabNavigator} /> */}
      <Stack.Screen 
        name="Drawer" 
        component={DrawerNavigator}
        options={{
          headerTitle: props => <LocationHeader {...props} allowFontScaling="true"/>
        }} 
      />
      <Stack.Screen name="Splash" component={SplashScreen}></Stack.Screen>
      <Stack.Screen name="Login" component={LoginContainer}></Stack.Screen>
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
    </Stack.Navigator>
  );
}
