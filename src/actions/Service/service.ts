import {API_ROOT} from '../../constants/config';
import { Schemas } from '../../utils/schema';
import { normalize } from 'normalizr';

import {
  SERVICE_REQUEST,
  SERVICE_SUCCESS,
  SERVICE_FAILURE,
} from '../../constants/ActionTypes';

function serviceRequest() {
  return {
    type: SERVICE_REQUEST
  }
}

function serviceSuccess(payload: any) {
  const normalized = normalize(payload.data,Schemas.SERVICE);
  return {
    type: SERVICE_SUCCESS,
    entities: normalized.entities
  }
}

function serviceFailure(error: any) {
  return {
    type: SERVICE_FAILURE,
    error: error
  }
}

export function fetchService(serviceID: string,requiredFields: string[]=[]) {
  const url = API_ROOT + '/services/' + serviceID;
  return (dispatch: any, getState : any) => {

    const service = getState().entities.services[serviceID];
    if (service && requiredFields.every(key => service.hasOwnProperty(key))) {
      return null
    }

    dispatch(serviceRequest());
    return fetch(url)
      .then(response => response.json())
      .then(json => {
        dispatch(serviceSuccess(json))
      })
      .catch((err)=> {
        dispatch(serviceFailure(err))
      })
  }
}