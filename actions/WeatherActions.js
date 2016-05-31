import fetch from 'isomorphic-fetch'

import * as types from '../constants/actionTypes'

function requestWeather(city) {
  return {
    type: types.REQUEST_WEATHER,
    city
  }
}

function receiveWeather(city, weather) {
  return {
    type: types.RECEIVE_WEATHER,
    city,
    weather,
    receivedAt: Date.now()
  }
}

export function fetchWeather(city) {
  return dispatch => {
    dispatch(requestWeather(city))
    return fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=33178d46dea4c98a92d98aa6ea4ebc24`)
      .then(response => response.json())
      .then(json => dispatch(receiveWeather(city, json)))
  }
}
