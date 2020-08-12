import { Ionicons } from "@expo/vector-icons";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";

import {
  BottomTabParamList,
  HomeParamList,
  AppointmentsParamList,
  FavouritesParamList,
  RegistrationParamList,
  CategoriesParamList,
  CompaniesParamList,
} from "../types";
import AppointmentsScreen from "../screens/AppointmentsScreen";
import HomeScreen from "../screens/HomeScreen";
import FavouritesScreen from "../screens/FavouritesScreen";
import RegistrationContainer from "../src/containers/Auth/RegistrationContainer";
import Categories from "../src/containers/Category/Categories";

const DrawerContent = createDrawerNavigator<BottomTabParamList>();

export default function DrawerNavigator() {
  return (
    <DrawerContent.Navigator initialRouteName="Home">
      <DrawerContent.Screen name="Home" component={HomeNavigator} />
      <DrawerContent.Screen name="Appointments" component={AppointmentsNavigator}/>
      <DrawerContent.Screen name="Favourites" component={FavouritesNavigator}/>
      <DrawerContent.Screen name="Registration" component={RegistrationNavigator}/>
      <DrawerContent.Screen name="Categories" component={CategoriesNavigator}/>
    </DrawerContent.Navigator>
  );
}

const HomeStack = createStackNavigator<HomeParamList>();

function HomeNavigator() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerTitle: "Home" }}
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
        options={{ headerTitle: "Appointments" }}
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
        options={{ headerTitle: "Favorites" }}
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
        options={{ headerTitle: "Register" }}
      />
    </RegistrationStack.Navigator>
  );
}

const CategoriesStack = createStackNavigator<CategoriesParamList>();

function CategoriesNavigator() {
  return (
    <CategoriesStack.Navigator>
      <CategoriesStack.Screen
        name="Categories"
        component={Categories}
        options={{ headerTitle: "Categories" }}
      />
    </CategoriesStack.Navigator>
  );
}
