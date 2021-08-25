import * as types from './type';

export default function weatherByCity(state = {
  isFetching: false,
}, action) {
  switch (action.type) {
    case types.REQUEST_WEATHER:
    case types.REQUEST_FORECAST:
      return {
        isFetching: true,
      };
    case types.RECEIVE_WEATHER:
      return {
        isFetching: false,
        weather: action.weather,
      };
    case types.RECEIVE_FORECAST:
      return {
        isFetching: false,
        forecast: action.forecast,
        days: action.days,
      };
    case types.FAILURE_WEATHER:
      return {
        isFetching: false,
        error: action.error,
      };
    default:
      return state;
  }
}
