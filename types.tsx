export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
  Drawer: undefined;
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
  Categories: undefined;
  Companies: undefined;
  About: undefined;
  Terms: undefined;
  Profile: undefined;
  Login: undefined;
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

export type CategoriesParamList = {
  Categories: undefined;
};

export type CompaniesParamList = {
  Companies: undefined;
};

export type AboutParamList = {
  About: undefined;
};

export type TermsParamList = {
  Terms: undefined;
};

export type LoginParamList = {
  About: undefined;
};
