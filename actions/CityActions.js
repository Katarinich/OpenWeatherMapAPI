import fetch from 'isomorphic-fetch'

import * as types from '../constants/actionTypes'

function setSelectedCity(city) {
  return {
    type: types.SELECT_CITY,
    city
  }
}

export function selectCity(city, cities) {
  return dispatch => {
    if(typeof city == 'string')
      city = cities.find(x => x.name.toLowerCase() == city.toLowerCase())

    dispatch(setSelectedCity(city))
  }
}

export function changeCityFavoriteStatus(city) {
  return {
    type: types.CHANGE_CITY_FAVORITE_STATUS,
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
