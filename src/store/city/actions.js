import * as types from './type'

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

export function changeFavorites(favorites) {
  return {
    type: types.CHANGE_FAVORITES,
    favorites
  }
}

export function loadFavoritesList(favorites)
{
  return {
    type: types.LOAD_FAVORITES_LIST,
    favorites
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

export function changeSearchInput(value) {
  return {
    type: types.CHANGE_SEARCH_INPUT,
    value
  }
}

export function fetchCities() {
  return dispatch => {
    dispatch(requestCities())
    return fetch('http://localhost:3001/api/cities')
      .then(response => response.json())
      .then(json => dispatch(receiveCities(json)))
  }
}
