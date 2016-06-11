import fetch from 'isomorphic-fetch'

import * as types from '../constants/actionTypes'

export function selectCity(city) {
  return {
    type: types.SELECT_CITY,
    city
  }
}

function requestCities() {
  return {
    type: types.REQUEST_CITIES
  }
}

function receiveCities(cities) {
  return {
    type: types.RECEIVE_CITIES,
    cities
  }
}

export function fetchCities() {
  return dispatch => {
    dispatch(requestCities())
    return fetch('/api/cities')
      .then(response => response.json())
      .then(json => dispatch(receiveCities(json)))
  }
}
