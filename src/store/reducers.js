import { combineReducers } from 'redux'
import {city} from './city/reducer'
import {weatherByCity} from './weatherByCity/reducer'

export default combineReducers({
    city,
    weatherByCity
  })
  