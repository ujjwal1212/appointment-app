import { Ionicons, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { BottomTabParamList, HomeParamList,  FavouritesParamList, MapParamList, AppointmentsParamList } from '../types';
import FavouritesScreen from '../screens/FavouritesScreen';
import Category from '../src/containers/Category/Category';
import Company from '../src/containers/Company/Company';
import CustomMap from '../src/containers/Company/CustomMap';
import AppointmentContainer from '../src/containers/Appointment/AppointmentContainer';
import { APP_STYLES } from '../src/utils/AppStyles';
import AppointmentsContainer from '../src/containers/User/AppointmentsContainer';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {

  return (
    <BottomTab.Navigator 
      initialRouteName="Home"
    >
      <BottomTab.Screen
        name="Home"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-home" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Appointments"
        component={AppointmentNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="calendar-check-o" color={color} type="fa"/>,
        }}
      />
      <BottomTab.Screen
        name="Map"
        component={MapNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="google-maps" color={color} type="mci" />,
        }}
      />
      <BottomTab.Screen
        name="Favourites"
        component={FavouritesNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-star" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

function TabBarIcon(props: { name: string; color: string, type?: string }) {
 if(props.type === 'fa'){
  return <FontAwesome size={24} {...props} />;
 } else if(props.type === 'mci'){
  return <MaterialCommunityIcons size={24}  {...props}/>
 } else {
  return <Ionicons size={24} {...props} />;
 }
}

const HomeStack = createStackNavigator<HomeParamList>();

function HomeNavigator() {
  return (
    <HomeStack.Navigator initialRouteName="Category">
      <HomeStack.Screen
        name="Category"
        component={Category}
        options={{ headerTitle: "Category" }}
        initialParams={{title: "Saloons", itemID: "1"}}
      />
      <HomeStack.Screen
        name="Company"
        component={Company}
        options={{ headerTitle: "Category" }}
      />
      <HomeStack.Screen
        name="Appointment"
        component={AppointmentContainer}
        options={{ headerTitle: "Book an Appointment" }}
      />
    </HomeStack.Navigator>
  );
}

const MapStack = createStackNavigator<MapParamList>();

function MapNavigator() {
  return (
    <MapStack.Navigator>
      <MapStack.Screen
        name="CustomMap"
        component={CustomMap}
        options={{ headerTitle: "Map View" }}
      />
    </MapStack.Navigator>
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

const AppointmentStack = createStackNavigator<AppointmentsParamList>();

function AppointmentNavigator() {
  return (
    <AppointmentStack.Navigator>
      <AppointmentStack.Screen
        name="AppointmentsScreen"
        component={AppointmentsContainer}
        options={{ headerTitle: "Favorites" }}
      />
    </AppointmentStack.Navigator>
  );
}
