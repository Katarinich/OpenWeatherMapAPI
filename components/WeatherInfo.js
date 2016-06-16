import React, { Component } from 'react'

import WeatherInfoHeader from './WeatherInfoHeader'

export default class WeatherInfo extends Component {
  render() {
    const { weather, selectedCity, favorites, changeFavorites } = this.props
    const pathToIcon = `/img/${weather.weather[0].main}.svg`

    return(
      <div className="info-block">

        <WeatherInfoHeader
          weather={ weather }
          favorites={ favorites }
          selectedCity={ selectedCity }
          changeFavorites = { favorites => changeFavorites(favorites) }
          onClick={ e => this.props.onClick(e) } />

        <div className="info-block-content">
          <div className="info-block-content-wrapper-left">
            <div className="info-block-content-temperature">
              <img src={ pathToIcon } className="weather-icon-size"/>
              <span>{Math.round(weather.main.temp)}{'°'}</span>
            </div>
            <div className="info-block-additional info-block-additional-first">
              <div className="info-block-additional-item">
                {weather.weather[0].description}
              </div>
            </div>
            <div className="info-block-additional info-block-additional-second">
              <div className="info-block-additional-item">
                <img src="/img/Pressure.svg" className="additional-icon-size" />
                {weather.main.pressure} {'hPa'}
              </div>
              <div className="info-block-additional-item">
                <img src="/img/Humidity.svg" className="additional-icon-size" />
                {weather.main.humidity} {'%'}
              </div>
              <div className="info-block-additional-item">
                <img src="/img/Wind.svg" className="additional-icon-size" />
                {weather.wind.speed} {'mps'}
              </div>
              <div className="info-block-additional-item">
                <div className="info-block-additional-item-sun">
                  <img src="/img/Sunrise.svg" className="additional-icon-size" />
                  {new Date(weather.sys.sunrise * 1000).toLocaleTimeString()}
                </div>
                <div className="info-block-additional-item-sun">
                  <img src="/img/Sunset.svg" className="additional-icon-size" />
                  {new Date(weather.sys.sunset * 1000).toLocaleTimeString()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )}
}
