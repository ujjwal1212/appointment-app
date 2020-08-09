export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export type BottomTabParamList = {
  Home: undefined;
  Appointments: undefined;
  Favourites: undefined;
  Registration: undefined;
  Category: {
    title: string,
    itemID: string;
  };
  Company: {
    title: string,
    itemID: string;
  };
};

export type HomeParamList = {
  HomeScreen: undefined;
};

export type AppointmentsParamList = {
  AppointmentsScreen: undefined;
};

export type FavouritesParamList = {
  FavouritesScreen: undefined;
};

export type RegistrationParamList = {
  RegistrationContainer: undefined;
};
