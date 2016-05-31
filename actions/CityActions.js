import * as types from '../constants/actionTypes'

export function selectCity(city) {
  return {
    type: types.SELECT_CITY,
    city
  }
}
