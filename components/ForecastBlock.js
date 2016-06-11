import React, { Component } from 'react'

export default class ForecastBlock extends Component {
  render() {
    const { weather } = this.props
    const pathToIcon = `/img/${weather.weather[0].main}.svg`
    const options = { weekday: 'long', month: 'long', day: 'numeric' }

    return(
      <div className="info-block" >
        <div className="forecast-header">
          {new Date(weather.dt * 1000).toLocaleString('en-US', options)}
        </div>
        <div className="forecast-block-content-wrapper-left">
          <div className="forecast-block-content-temperature">
            <img src={ pathToIcon } className="weather-icon-size"/>
          </div>
          <div className="info-block-additional info-block-additional-first">
            <div className="info-block-additional-item">
              {weather.weather[0].description}
            </div>
          </div>
          <div className="info-block-additional info-block-additional-second">
            <div className="info-block-additional-item">
              <img src="/img/Pressure.svg" className="additional-icon-size" />
              {weather.pressure} {'hPa'}
            </div>
            <div className="info-block-additional-item">
              <img src="/img/Humidity.svg" className="additional-icon-size" />
              {weather.humidity} {'%'}
            </div>
            <div className="info-block-additional-item">
              <img src="/img/Wind.svg" className="additional-icon-size" />
              {weather.speed} {'mps'}
            </div>
          </div>
        </div>
        <div className="forecast-block-content-wrapper-right">
          <div className="day-period">
            <div className="day-time" >{ 'Night' }</div>
            <div className="day-temp" >{ weather.temp.night }</div>
          </div>
          <div className="day-period">
            <div className="day-time" >{ 'Morning' }</div>
            <div className="day-temp" >{ weather.temp.morn }</div>
          </div>
          <div className="day-period">
            <div className="day-time" >{ 'Day' }</div>
            <div className="day-temp" >{ weather.temp.day }</div>
          </div>
          <div className="day-period">
            <div className="day-time" >{ 'Evening' }</div>
            <div className="day-temp" >{ weather.temp.eve }</div>
          </div>
        </div>
      </div>
    )
  }
}
