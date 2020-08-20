import { API_ROOT } from '../constants/config';
import { getUserToken } from '../utils/storage';
import { Schemas } from '../utils/schema';
import { normalize } from 'normalizr';
import union from 'lodash/union';

import {
  FAVORITES_REQUEST,
  FAVORITES_SUCCESS,
  FAVORITES_FAILURE,
  FAVORITE_COMPANY
} from '../constants/ActionTypes'
import { ICompany } from '../constants/Company';

function favoritesRequest() {
  return {
    type: FAVORITES_REQUEST
  }
}

function favoritesSuccess(payload: any) {
  const normalized = normalize(payload.data,Schemas.USER);

  return {
    type: FAVORITES_SUCCESS,
    entities: normalized.entities
  }
}

function favoritesFailure(error: any) {
  return {
    type: FAVORITES_FAILURE,
    error: error,
  }
}

// get Auth user's favorites
export function fetchFavorites() {
  return (dispatch: any) => {
    dispatch(favoritesRequest());
    return getUserToken().then((token) => {
      const url = API_ROOT + `/favorites/?api_token=${token}`;
      return fetch(url)
        .then(response => response.json())
        .then(json => {
          dispatch(favoritesSuccess(json))
        })
    }).catch((err)=> {
      dispatch(favoritesFailure(err))
    })
  }
}


function updateUserFavorites(user: any,company: ICompany) {

  const favorites = user.favorites ? user.favorites : [];
  user.favorites = company.isFavorited ? favorites.filter((fav: any) => fav != company.id) : union(favorites,[company.id]) ;
  const normalized = normalize(user,Schemas.USER);
  return {
    type: FAVORITE_COMPANY,
    entities: normalized.entities
  }
}

function updateCompanyFavorites(user: any,company: any) {
  const favorites = company.favorites ? company.favorites : [];
  company.favorites = company.isFavorited ? favorites.filter((fav: any) => fav != user.id) : union(favorites,[user.id]) ;
  company.unFavorited = company.isFavorited ? true : false;
  company.isFavorited = !company.isFavorited;
  const normalized = normalize(company,Schemas.COMPANY);
  return {
    type: FAVORITE_COMPANY,
    entities: normalized.entities
  }
}

export function favoriteCompany(comp: ICompany) {

  return (dispatch: any,state: any) => {

    const company = Object.assign({},state().entities.companies[comp.id]);
    const user = Object.assign({},state().entities.users[state().userReducer.authUserID]);

    dispatch(updateUserFavorites(user,company));
    dispatch(updateCompanyFavorites(user,company));

    let params = {
      company:comp.id
    };

    return getUserToken().then((token) => {
      const url = API_ROOT + `/companies/favorite?api_token=${token}`;
      return fetch(url, {
        method: 'POST',
        body: JSON.stringify(params)
      })
        .then(response => response.json())
        .then(json => {
        }).catch((err)=> console.log(err))
    })
  }

}
