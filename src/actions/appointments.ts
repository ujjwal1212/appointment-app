import { API_ROOT } from '../constants/config';
import { getUserToken } from '../utils/storage';
import { Schemas } from '../utils/schema';
import { normalize } from 'normalizr';
import moment from 'moment';
import Appointment from "../constants/Appointment";

import {
  APPOINTMENTS_REQUEST,
  APPOINTMENTS_SUCCESS,
  APPOINTMENTS_FAILURE,
  CREATE_APPOINTMENT_REQUEST,
  CREATE_APPOINTMENT_SUCCESS,
  CREATE_APPOINTMENT_FAILURE,
  INVALIDATE_APPOINTMENT,
  DELETE_APPOINTMENT
} from '../constants/ActionTypes';

function appointmentRequest() {
  return {
    type: APPOINTMENTS_REQUEST
  }
}

function appointmentSuccess(payload: any) {
  const normalized = normalize(payload.data,Schemas.APPOINTMENT_ARRAY);
  return {
    type: APPOINTMENTS_SUCCESS,
    entities: normalized.entities
  }
}

function appointmentFailure(error: any) {
  return {
    type: APPOINTMENTS_FAILURE,
    error: error
  }
}

function createAppointmentRequest() {
  return {
    type: CREATE_APPOINTMENT_REQUEST
  }
}

function createAppointmentSuccess() {
  return {
    type: CREATE_APPOINTMENT_SUCCESS
  }
}

function createAppointmentFailure(error: any) {
  return {
    type: CREATE_APPOINTMENT_FAILURE,
    error: error
  }
}


export function createAppointment(appointment: Appointment) {

  return (dispatch: any,state: any) => {

    dispatch(createAppointmentRequest());

    return getUserToken()
      .then((token) => {
        const formattedDate = moment(appointment.getDate()).format('YYYY-MM-DD');
        let params = {
          date:formattedDate,
          timing_id: appointment.getTime().id,
          employee_id:appointment.getEmployee().id,
          company_id: appointment.getCompanyId(),
          service_id: appointment.getServiceID()
        };
        let url = API_ROOT +`/appointments/make?api_token=${token}`;
        return fetch(url, {
          method: 'POST',
          body: JSON.stringify(params)
        })
          .then(response =>  response.json())
          .then(json => {
            if (json.success) {
              dispatch(createAppointmentSuccess());
              dispatch(fetchAppointments());
            } else {
              dispatch(createAppointmentFailure(json.message))
            }
          })
      }).catch((err)=> dispatch(createAppointmentFailure(err)));
  }
}

export function fetchAppointments() {
  return (dispatch: any) => {
    dispatch(appointmentRequest());
    return  getUserToken().then((token) => {
      const url = API_ROOT + `/appointments/?api_token=${token}`;
      return fetch(url)
        .then(response => response.json())
        .then(json =>  { dispatch(appointmentSuccess(json)) })
    }).catch((err)=> { dispatch(appointmentFailure(err)) });
  }
}

function updateUserAppointments(appointments: any,appointmentID: any) {
  appointments = Object.keys(appointments).map((appointment) => {
    if(appointment == appointmentID) {
      return Object.assign({},appointments[appointment],{isDeleted:true});
    }
    return Object.assign({},appointments[appointment]);
  });
  const normalized = normalize(appointments,Schemas.APPOINTMENT_ARRAY);
  return {
    type: DELETE_APPOINTMENT,
    entities: normalized.entities
  }
}

export function cancelAppointment(appointmentID: any) {
  return (dispatch: any,state: any) => {

    const appointments = Object.assign({},state().entities.appointments);

    dispatch(updateUserAppointments(appointments,appointmentID));

    getUserToken().then((token) => {

      let params = {
        id:appointmentID
      };

      const url = API_ROOT + `/appointments/cancel?api_token=${token}`;
      return fetch(url, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(params)
      })
        .then(response => response.json())
        .then(json => console.log(json))
        .catch((err)=>console.log(err))
    });
  }
}
export function invalidateCreatedAppointment() {
  return (dispatch: any) => {
    dispatch({type: INVALIDATE_APPOINTMENT});
  }
}