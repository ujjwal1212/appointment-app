import { Ionicons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import { BottomTabParamList, HomeParamList, AppointmentsParamList, FavouritesParamList, RegistrationParamList } from '../types';
import AppointmentsScreen from '../screens/AppointmentsScreen';
import HomeScreen from '../screens/HomeScreen';
import FavouritesScreen from '../screens/FavouritesScreen';
import RegistrationContainer from '../src/containers/Auth/RegistrationContainer';

const BottomTab = createMaterialBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {

  return (
    <BottomTab.Navigator
      initialRouteName="Home">
      <BottomTab.Screen
        name="Home"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-home" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Appointments"
        component={AppointmentsNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-calendar" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Favourites"
        component={FavouritesNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-star-outline" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Registration"
        component={RegistrationNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-star-outline" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

function TabBarIcon(props: { name: string; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

const HomeStack = createStackNavigator<HomeParamList>();

function HomeNavigator() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerTitle: 'Home' }}
      />
    </HomeStack.Navigator>
  );
}

const AppointmentsStack = createStackNavigator<AppointmentsParamList>();

function AppointmentsNavigator() {
  return (
    <AppointmentsStack.Navigator>
      <AppointmentsStack.Screen
        name="AppointmentsScreen"
        component={AppointmentsScreen}
        options={{ headerTitle: 'Appointments' }}
      />
    </AppointmentsStack.Navigator>
  );
}

const FavouritesStack = createStackNavigator<FavouritesParamList>();

function FavouritesNavigator() {
  return (
    <FavouritesStack.Navigator>
      <FavouritesStack.Screen
        name="FavouritesScreen"
        component={FavouritesScreen}
        options={{ headerTitle: 'Favorites' }}
      />
    </FavouritesStack.Navigator>
  );
}

const RegistrationStack = createStackNavigator<RegistrationParamList>();

function RegistrationNavigator() {
  return (
    <RegistrationStack.Navigator>
      <RegistrationStack.Screen
        name="RegistrationContainer"
        component={RegistrationContainer}
        options={{ headerTitle: 'Register' }}
      />
    </RegistrationStack.Navigator>
  );
}
