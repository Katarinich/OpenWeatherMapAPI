import * as types from "./type";

export default function city(state = {}, action) {
  switch (action.type) {
    case types.SELECT_CITY:
      return {
        ...state,
        inputValue: action.city.name,
        selectedCity: action.city,
      };
    case types.REQUEST_CITIES:
      return {
        ...state,
        isFetching: true,
      };
    case types.RECEIVE_CITIES:
      return {
        ...state,
        isFetching: false,
        cities: action.cities,
      };
    case types.LOAD_FAVORITES_LIST:
    case types.CHANGE_FAVORITES:
      return {
        ...state,
        favorites: action.favorites,
      };
    case types.CHANGE_SEARCH_INPUT:
      return {
        ...state,
        inputValue: action.value,
      };
    default:
      return state;
  }
}
