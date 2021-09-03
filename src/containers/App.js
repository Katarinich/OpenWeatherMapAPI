/* eslint-disable no-shadow */
import { Translation } from "react-i18next";
import "../static/css/style.css";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import React, { Component } from "react";
import { bindActionCreators } from "redux";
import "bootstrap/dist/css/bootstrap.min.css";
import * as cityActions from "../store/city/actions";
import SearchBar from "../components/SearchBar/SearchBar";
import * as weatherActions from "../store/weatherByCity/actions";
import ForecastInfo from "../components/ForcastWeather/ForecastInfo";
import WeatherInfo from "../components/ForcastWeather/WeatherInfo/WeatherInfo";
import i18next from '../services/i18n';

class App extends Component {
  componentDidMount() {
    const { cityActions } = this.props;
    const { fetchCities, loadFavoritesList } = cityActions;
    fetchCities();

    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    loadFavoritesList(favorites);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleForecast = this.handleForecast.bind(this);
  }

  handleSearch() {
    const { city, weatherActions } = this.props;
    const { selectedCity, inputValue } = city;

    const { fetchWeatherById, fetchWeatherByName } = weatherActions;

    if (selectedCity !== undefined && selectedCity.name === inputValue) {
      fetchWeatherById(selectedCity, i18next.language);
    } else {
      fetchWeatherByName(inputValue || "", i18next.language);
    }
  }

  handleForecast(e) {
    const { weatherActions, city } = this.props;
    weatherActions.fetchForecast(city.selectedCity, e.target.id, i18next.language);
  }

  handleLanguage(e) {
    const { weatherActions, city, weatherByCity } = this.props;
    const { weather, forecast } = weatherByCity;

    if (weather) {
      weatherActions.fetchWeatherById(city.selectedCity, e.target.value);
    }
    if (forecast) {
      weatherActions.fetchForecast(city.selectedCity, forecast.cnt, e.target.value);
    }
  }

  render() {
    const { cityActions, city, weatherByCity } = this.props;
    const { weather, error, forecast } = weatherByCity;
    const {
      isFetching, cities, selectedCity, favorites, inputValue,
    } = city;
    return (
      <Translation>
        {(t, { i18n }) => (
          <div className="container">
            {isFetching && (
              <img
                src="/images/loading.gif"
                className="loading-icon-position"
                alt="loading"
              />
            )}

            {!isFetching && cities && (
              <SearchBar
                cities={cities}
                favorites={favorites}
                selectedCity={selectedCity}
                onClick={this.handleSearch}
                onSelect={cityActions.selectCity}
                onChange={cityActions.changeSearchInput}
                inputValue={inputValue || ""}
                onLanguageChange={(lang) => i18n.changeLanguage(lang)}
                onClickLanguage={
                  (forecast && ((e) => this.handleLanguage(e)))
                  || (weather && ((e) => this.handleLanguage(e)))
                }
              />
            )}

            {error && (
              <div className="alert alert-danger alert-margin" role="alert">
                {error}
              </div>
            )}

            {weather && (
              <WeatherInfo
                weather={weather}
                selectedCity={selectedCity}
                favorites={favorites}
                changeFavorites={cityActions.changeFavorites}
                onClick={this.handleForecast}
                onLanguageChange={(lang) => i18n.changeLanguage(lang)}
              />
            )}

            {forecast && (
              <ForecastInfo
                days={forecast.list}
                cityName={forecast.city.name}
                onClick={() => this.handleSearch()}
                onLanguageChange={(lang) => i18n.changeLanguage(lang)}
              />
            )}
          </div>
        )}
      </Translation>
    );
  }
}

function mapStateToProps(state) {
  const { city } = state;
  if (!city.cities) {
    return {
      ...state,
      cities: {
        isFetching: true,
      },
    };
  }

  return state;
}

function mapDispatchToProps(dispatch) {
  return {
    weatherActions: bindActionCreators(weatherActions, dispatch),
    cityActions: bindActionCreators(cityActions, dispatch),
  };
}

App.propTypes = {
  city: PropTypes.object,
  cityActions: PropTypes.object,
  weatherActions: PropTypes.object,
  weatherByCity: PropTypes.object,
  weather: PropTypes.object,
  forecast: PropTypes.object,
  error: PropTypes.string,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
