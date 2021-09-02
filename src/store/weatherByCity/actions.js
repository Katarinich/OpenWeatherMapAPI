/* eslint-disable promise/always-return */
/* eslint-disable eqeqeq */
import * as types from "./type";
import { selectCity } from "../city/actions";
import { apiKey, API_BASE_URL, statusCode } from "../../constants";

function requestWeather(city, lg) {
  return {
    type: types.REQUEST_WEATHER,
    city,
    lg,
  };
}

function receiveWeather(city, weather, lg) {
  return {
    type: types.RECEIVE_WEATHER,
    city,
    weather,
    lg,
    receivedAt: Date.now(),
  };
}

function failureWeather(error) {
  return {
    type: types.FAILURE_WEATHER,
    error: error.message,
  };
}

function requestForecast(city, days, lg) {
  return {
    type: types.REQUEST_FORECAST,
    city,
    days,
    lg,
  };
}

function receiveForecast(city, forecast, days, lg) {
  return {
    type: types.RECEIVE_FORECAST,
    city,
    forecast,
    days,
    lg,
    receivedAt: Date.now(),
  };
}

export function fetchWeatherById(city, lg) {
  return (dispatch) => {
    dispatch(requestWeather(city, lg));
    return fetch(`${API_BASE_URL}/weather?id=${city.id}&units=metric&lang=${lg}&appid=${apiKey}`)
      .then((response) => response.json())
      .then((json) => {
        if (Number(json.cod) !== statusCode) dispatch(failureWeather(json));
        else dispatch(receiveWeather(city, json, lg));
      });
  };
}

export function fetchWeatherByName(cityName) {
  return (dispatch) => {
    dispatch(requestWeather(cityName));
    return fetch(`${API_BASE_URL}/weather?q=${cityName}&units=metric&appid=${apiKey}`)
      .then((response) => response.json())
      .then((json) => {
        if (Number(json.cod) !== statusCode) dispatch(failureWeather(json));
        else {
          const city = {
            id: json.id,
            name: json.name,
            coord: json.coord,
            country: json.sys.country,
          };

          dispatch(receiveWeather(city, json));
          dispatch(selectCity(city));
        }
      });
  };
}

export function fetchForecast(city, days, lg) {
  return (dispatch) => {
    dispatch(requestForecast(city, days, lg));
    return fetch(`${API_BASE_URL}/forecast/daily?id=${city.id}&cnt=${days}&units=metric&lang=${lg}&appid=${apiKey}`)
      .then((response) => response.json())
      .then((json) => {
        if (Number(json.cod) !== statusCode) dispatch(failureWeather(json));
        else dispatch(receiveForecast(city, json, days, lg));
      });
  };
}
