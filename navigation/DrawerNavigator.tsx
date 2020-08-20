import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import {
  BottomTabParamList,
  FavouritesParamList,
  RegistrationParamList,
} from "../types";
import FavouritesScreen from "../screens/FavouritesScreen";
import RegistrationContainer from "../src/containers/Auth/RegistrationContainer";
import BottomTabNavigator from "./BottomTabNavigator";

const DrawerContent = createDrawerNavigator<BottomTabParamList>();

export default function DrawerNavigator() {
  return (
    <DrawerContent.Navigator initialRouteName="Home">
      <DrawerContent.Screen name="Home" component={BottomTabNavigator} />
      <DrawerContent.Screen name="Favourites" component={FavouritesNavigator}/>
      <DrawerContent.Screen name="Registration" component={RegistrationNavigator}/>
    </DrawerContent.Navigator>
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