/* eslint-disable jsx-a11y/click-events-have-key-events */
import PropTypes from "prop-types";
import React, { Component } from "react";
import { typeDate, forecastOptions } from "../../../constants";

export default class WeatherInfoHeader extends Component {
  handleClickAdd() {
    const { selectedCity, changeFavorites, favorites } = this.props;

    const setFavorites = [...favorites, selectedCity];

    localStorage.setItem("favorites", JSON.stringify(setFavorites));
    changeFavorites(setFavorites);
  }

  handleClickRemove() {
    const { selectedCity, changeFavorites, favorites } = this.props;

    const setFavorites = favorites.filter((x) => x.id !== selectedCity.id);
    localStorage.setItem("favorites", JSON.stringify(setFavorites));

    changeFavorites(setFavorites);
  }

  render() {
    const { weather, onClick, favorites } = this.props;

    const isFavorite = !!favorites.find((x) => x.id === weather.id);

    return (
      <div className="info-block-header">
        <div className="info-block-header-left">
          <div className="info-block-header-left-place">
            <span>
              {weather.name}
              {", "}
              {weather.sys.country}
            </span>

            {!isFavorite ? (
              <img
                src="/images/Favorites-Add.svg"
                className="icon-fav"
                alt="fav-icon"
                onClick={() => this.handleClickAdd()}
              />
            ) : (
              <img
                src="/images/Favorites-Remove.svg"
                className="icon-fav"
                alt="fav-remove-icon"
                onClick={() => this.handleClickRemove()}
              />
            )}
          </div>
          <div className="info-block-header-left-date">
            <span>
              {new Date(weather.dt * 1000).toLocaleString(
                typeDate,
                forecastOptions,
              )}
            </span>
          </div>
        </div>
        <div className="info-block-header-right">
          {"Forecast: "}
          <button type="button" onClick={onClick} id="3">
            {"3 days "}
          </button>
          <button type="button" onClick={onClick} id="7">
            {" 7 days "}
          </button>
          <button type="button" onClick={onClick} id="14">
            {" 14 days"}
          </button>
        </div>
      </div>
    );
  }
}

WeatherInfoHeader.propTypes = {
  selectedCity: PropTypes.object,
  changeFavorites: PropTypes.func,
  weather: PropTypes.object,
  onClick: PropTypes.func,
  favorites: PropTypes.array,
};
