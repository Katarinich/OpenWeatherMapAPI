import { combineReducers } from 'redux'
import * as types from '../constants/actionTypes'

function selectedCity(state = '', action){
  switch (action.type) {
  case types.SELECT_CITY:
    return action.city
  default:
    return state
  }
}

function weatherByCity(state = {
  isFetching: false
}, action){
  switch (action.type) {
  case types.REQUEST_WEATHER:
    return {
      isFetching: true
    }
  case types.RECEIVE_WEATHER:
    return {
      isFetching: false,
      weather: action.weather
    }
  default:
    return state
  }
}

export default combineReducers({
  selectedCity,
  weatherByCity
})
