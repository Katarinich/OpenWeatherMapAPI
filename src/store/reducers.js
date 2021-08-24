import {city} from './city/reducer'
import { combineReducers } from 'redux'
import {weatherByCity} from './weatherByCity/reducer'

export default combineReducers({
    city,
    weatherByCity
  })
  