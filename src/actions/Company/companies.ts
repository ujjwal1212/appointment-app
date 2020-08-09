import { API_ROOT } from '../../constants/config';
import { normalize } from 'normalizr';
import { Schemas } from '../../utils/schema';
import isEmpty from 'lodash/isEmpty';

import {
  COMPANIES_REQUEST,
  COMPANIES_SUCCESS,
  COMPANIES_FAILURE
} from '../../constants/ActionTypes';

function companiesRequest() {
  return {
    type: COMPANIES_REQUEST
  }
}

function companiesSuccess(payload: any) {
  const normalized = normalize(payload.data,Schemas.COMPANY_ARRAY);
  console.log('norm',normalized);
  return {
    type: COMPANIES_SUCCESS,
    entities:normalized.entities
  }
}

function companiesFailure(error: any) {
  return {
    type: COMPANIES_FAILURE,
    error: error,
  }
}

export function fetchCompanies() {
  const url = API_ROOT + '/companies';
  return function (dispatch: any,getState: any) {

    if(!isEmpty(getState().entities.companies)) {
      return;
    }
    dispatch(companiesRequest());
    return fetch(url)
      .then(response => response.json())
      .then(json => dispatch(companiesSuccess(json)))
      .catch(error => dispatch(companiesFailure(error)))
  };
}