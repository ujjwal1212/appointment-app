import {API_ROOT} from '../../constants/config';
import { getUserToken } from '../../utils/storage';
import { normalize } from 'normalizr';
import { Schemas } from '../../utils/schema';

import {
  CATEGORY_REQUEST,
  CATEGORY_SUCCESS,
  CATEGORY_FAILURE
} from '../../constants/ActionTypes';

function categoryRequest() {
  return {
    type: CATEGORY_REQUEST
  }
}

function categorySuccess(payload: any) {
  return {
    type: CATEGORY_SUCCESS,
    entities:payload.entities
  }
}

function categoryFailure(error: any) {
  return {
    type: CATEGORY_FAILURE,
    error: error
  }
}


export function fetchCategory(categoryID: any, requiredFields = []) {

  return (dispatch: any,getState: any) => {

    const category = getState().entities.categories[categoryID];
    if (category && requiredFields.every(key => category.hasOwnProperty(key))) {
      return null
    }
    
    dispatch(categoryRequest());
    getUserToken().then((token) => {
        const url = API_ROOT + `/companies/${categoryID}/list`;
        return fetch(url)
          .then(response => response.json())
          .then(json => {
            const normalized = normalize(json, Schemas.CATEGORY);
            dispatch(categorySuccess(normalized))
          })
      })
      .catch((err)=> {
        console.log(err);
        dispatch(categoryFailure(err))
      });
  }
}