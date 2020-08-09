import { RegistrationData } from "./RegistrationData";

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGOUT_USER = 'LOGOUT_USER';

export const REGISTER_REQUEST = 'REGISTER_REQUEST';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';

export const CATEGORIES_REQUEST = 'CATEGORIES_REQUEST';
export const CATEGORIES_SUCCESS = 'CATEGORIES_SUCCESS';
export const CATEGORIES_FAILURE = 'CATEGORIES_FAILURE';

export const CATEGORY_REQUEST = 'CATEGORY_REQUEST';
export const CATEGORY_SUCCESS = 'CATEGORY_SUCCESS';
export const CATEGORY_FAILURE = 'CATEGORY_FAILURE';

export const COMMENTS_REQUEST = 'COMMENTS_REQUEST';
export const COMMENTS_SUCCESS = 'COMMENTS_SUCCESS';
export const COMMENTS_FAILURE = 'COMMENTS_FAILURE';
export const COMMENT_SAVED = 'COMMENT_SAVED';
export const SAVING_COMMENT = 'SAVING_COMMENT';

export const FAVORITES_REQUEST = 'FAVORITES_REQUEST';
export const FAVORITES_SUCCESS = 'FAVORITES_SUCCESS';
export const FAVORITES_FAILURE = 'FAVORITES_FAILURE';

export const COMPANY_REQUEST = 'COMPANY_REQUEST';
export const COMPANY_SUCCESS = 'COMPANY_SUCCESS';
export const COMPANY_FAILURE = 'COMPANY_FAILURE';
export const SET_COMPANY_SERVICE = 'SET_COMPANY_SERVICE';
export const FAVORITE_COMPANY = 'FAVORITE_COMPANY';
export const COMPANY_SEARCH_REQUEST = 'COMPANY_SEARCH_REQUEST';
export const COMPANY_SEARCH_SUCCESS = 'COMPANY_SEARCH_SUCCESS';
export const COMPANY_SEARCH_FAILURE = 'COMPANY_SEARCH_FAILURE';

export const COMPANIES_REQUEST = 'COMPANIES_REQUEST';
export const COMPANIES_SUCCESS = 'COMPANIES_SUCCESS';
export const COMPANIES_FAILURE = 'COMPANIES_FAILURE';

export const SERVICES_REQUEST = 'SERVICES_REQUEST';
export const SERVICES_SUCCESS = 'SERVICES_SUCCESS';
export const SERVICES_FAILURE = 'SERVICES_FAILURE';

export const SERVICE_REQUEST = 'SERVICE_REQUEST';
export const SERVICE_SUCCESS = 'SERVICE_SUCCESS';
export const SERVICE_FAILURE = 'SERVICE_FAILURE';

export const TIMINGS_REQUEST = 'TIMINGS_REQUEST';
export const TIMINGS_SUCCESS = 'TIMINGS_SUCCESS';
export const TIMINGS_FAILURE = 'TIMINGS_FAILURE';

export const CREATE_APPOINTMENT_REQUEST = 'CREATE_APPOINTMENT_REQUEST';
export const CREATE_APPOINTMENT_SUCCESS = 'CREATE_APPOINTMENT_SUCCESS';
export const CREATE_APPOINTMENT_FAILURE = 'CREATE_APPOINTMENT_FAILURE';
export const INVALIDATE_APPOINTMENT = 'INVALIDATE_APPOINTMENT';

export const APPOINTMENTS_REQUEST = 'APPOINTMENTS_REQUEST';
export const APPOINTMENTS_SUCCESS = 'APPOINTMENTS_SUCCESS';
export const APPOINTMENTS_FAILURE = 'APPOINTMENTS_FAILURE';
export const DELETE_APPOINTMENT = 'DELETE_APPOINTMENT';

export interface RequestRegisterAction {
    type: typeof LOGIN_REQUEST;
    data: RegistrationData;
}

export interface SuccessRegisterAction {
    type: typeof REGISTER_SUCCESS;
    data: RegistrationData;
}

export interface FailureRegisterAction {
    type: typeof REGISTER_FAILURE;
    data: RegistrationData;
}
export interface LoginFailureAction {
    type: typeof LOGIN_FAILURE;
    data: RegistrationData;
}
export interface LoginSuccessAction {
    type: typeof LOGIN_SUCCESS;
    data: RegistrationData;
}
export interface LoginRequestAction {
    type: typeof LOGIN_REQUEST;
    data: RegistrationData;
}
export interface LogoutUserAction {
    type: typeof LOGOUT_USER;
    data: RegistrationData;
}

export type RegistrationActionTypes =
  | RequestRegisterAction
  | SuccessRegisterAction
  | FailureRegisterAction;

export type LoginActionTypes =
  | LoginFailureAction
  | LoginRequestAction
  | LoginSuccessAction
  | LogoutUserAction;

export type AppActions = 
  | RegistrationActionTypes 
  | LoginActionTypes;