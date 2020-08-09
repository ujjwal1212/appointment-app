import { API_ROOT } from '../../constants/config';
import { normalize } from 'normalizr';
import { Schemas } from '../../utils/schema';
import { getUserToken } from '../../utils/storage';

import {
  COMPANY_REQUEST,
  COMPANY_SUCCESS,
  COMPANY_FAILURE,
  COMPANY_SEARCH_REQUEST,
  COMPANY_SEARCH_SUCCESS,
  COMPANY_SEARCH_FAILURE,
  SET_COMPANY_SERVICE
} from '../../constants/ActionTypes';

function companyRequest() {
  return {
    type: COMPANY_REQUEST
  }
}

function companySuccess(payload: any) {
  const normalized = normalize(payload.data,Schemas.COMPANY);
  return {
    type: COMPANY_SUCCESS,
    entities: normalized.entities
  }
}

function companyFailure(error: any) {
  return {
    type: COMPANY_FAILURE,
    error: error
  }
}

export function fetchCompany(companyID: any,requiredFields=[]) {
  const url = `${API_ROOT}/companies/${companyID}/show`;
  return (dispatch: any,getState: any) => {

    const company = getState().entities.companies[companyID];
    if (company && requiredFields.every(key => company.hasOwnProperty(key))) {
      return null
    }
    dispatch(companyRequest());
    return fetch(url)
      .then(response => response.json())
      .then(json => {
        dispatch(companySuccess(json))
      })
      .catch((err)=> {
        dispatch(companyFailure(err))
      })
  }
}

function searchSuccess(normalized: any) {
  return {
    type: COMPANY_SUCCESS,
    entities: normalized.entities
  }
}

function setSearchResult(normalized: any) {
  return {
    type: COMPANY_SEARCH_SUCCESS,
    result: normalized.result
  }
}

export function setCompanyService(serviceID: any) {
  return (dispatch: any) => dispatch({
    type:SET_COMPANY_SERVICE,
    selectedServiceID:serviceID
  });
}

export function searchCompany(searchString: any) {
  return (dispatch: any) => {
    dispatch({type:COMPANY_SEARCH_REQUEST});
    getUserToken().then((token) => {
      const url = API_ROOT + `/companies?search=${searchString}&api_token=${token}`;
      return fetch(url)
        .then(response => response.json())
        .then(json =>  {
          const normalized = normalize(json.data,Schemas.COMPANY_ARRAY);
          dispatch(searchSuccess(normalized));
          dispatch(setSearchResult(normalized));
        })
        .catch((err)=> {
          dispatch({type:COMPANY_SEARCH_FAILURE})
        })
    });
  }

}