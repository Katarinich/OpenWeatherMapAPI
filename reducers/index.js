import { combineReducers } from 'redux'
import * as types from '../constants/actionTypes'

function city(state = {}, action){
  switch (action.type) {
    case types.SELECT_CITY:
      return {
        ...state,
        selectedCity: action.city
      }
    case types.REQUEST_CITIES:
      return {
        ...state,
        isFetching: true
      }
    case types.RECEIVE_CITIES:
      return {
        ...state,
        isFetching: false,
        cities: action.cities
      }
    default:
      return state
  }
}

function weatherByCity(state = {
  isFetching: false
}, action){
  switch (action.type) {
    case types.REQUEST_WEATHER:
    case types.REQUEST_FORECAST:
      return {
        isFetching: true
      }
    case types.RECEIVE_WEATHER:
      return {
        isFetching: false,
        weather: action.weather
      }
    case types.RECEIVE_FORECAST:
      return {
        isFetching: false,
        forecast: action.forecast,
        days: action.days
      }
    case types.FAILURE_WEATHER:
      return {
        isFetching: false,
        error: action.error
      }
    default:
      return state
  }
}

export default combineReducers({
  city,
  weatherByCity
})
