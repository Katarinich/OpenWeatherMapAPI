import React, { Component } from 'react'
import ForecastForToday from './ForecastForToday'
import {periodsDay, degreesIcon, forecastOptions, pressureValue, humidityValue, speedValue} from '../../constants'
import ForecastWeatherIcon from './ForecastWeatherIcon'
import ParametrsForecastWeather from './ParametersForecastWeather'

export default class ForecastBlock extends Component {
  render() {
    const { weather } = this.props
    const pathToIcon = `/img/${weather.weather[0].main}.svg`

    return (
      <div className='info-block'>
        <div className='forecast-header'>
          {new Date(weather.dt * 1000).toLocaleString('en-US', forecastOptions)}
        </div>
        <div className='forecast-block-content-wrapper-left'>
          <ForecastWeatherIcon
            pathToIcon={pathToIcon}
            description={weather.weather[0].description}
          />
          <div className='info-block-additional info-block-additional-second'>
            <ParametrsForecastWeather
              description={weather.pressure + pressureValue}
              src={'/img/Pressure.svg'}
            />
            <ParametrsForecastWeather
              description={weather.humidity + humidityValue}
              src={'/img/Humidity.svg'}
            />
            <ParametrsForecastWeather
              description={weather.speed + speedValue}
              src={'/img/Wind.svg'}
            />
          </div>
        </div>
        <div className='forecast-block-content-wrapper-right'>
          <ForecastForToday
            value={Math.round(weather.temp.night) + degreesIcon}
            time={periodsDay.night}
          />
          <ForecastForToday
            value={Math.round(weather.temp.morn) + degreesIcon}
            time={periodsDay.morning}
          />
          <ForecastForToday
            value={Math.round(weather.temp.day) + degreesIcon}
            time={periodsDay.day}
          />
          <ForecastForToday
            value={Math.round(weather.temp.eve) + degreesIcon}
            time={periodsDay.evening}
          />
        </div>
      </div>
    );
  }
}
