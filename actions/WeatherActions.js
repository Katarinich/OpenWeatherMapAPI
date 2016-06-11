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

function failureWeather(error) {
  return {
    type: types.FAILURE_WEATHER,
    error: error.message
  }
}

function requestForecast(city, days) {
  return {
    type: types.REQUEST_FORECAST,
    city,
    days
  }
}

function receiveForecast(city, forecast, days) {
  return {
    type: types.RECEIVE_FORECAST,
    city,
    forecast,
    days,
    receivedAt: Date.now()
  }
}

export function fetchWeather(city) {
  return dispatch => {
    dispatch(requestWeather(city))
    return fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=33178d46dea4c98a92d98aa6ea4ebc24`)
      .then(response => response.json())
      .then(function(json) {
        if(json.cod != '200') dispatch(failureWeather(json))
        else dispatch(receiveWeather(city, json))
      })
  }
}

export function fetchForecast(city, days) {
  return dispatch => {
    dispatch(requestForecast(city, days))
    return fetch(`http://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&cnt=${days}&units=metric&appid=33178d46dea4c98a92d98aa6ea4ebc24`)
      .then(response => response.json())
      .then(function(json) {
        if(json.cod != '200') dispatch(failureWeather(json))
        else dispatch(receiveForecast(city, json, days))
      })
  }
}
