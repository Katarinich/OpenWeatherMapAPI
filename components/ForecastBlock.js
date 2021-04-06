import React, { Component } from 'react'
import CommonWeatherProperty from './CommonWeatherProperty'
import ForecastDayPeriod from './ForecastDayPeriod'
import TemperatureBlock from './TemperatureBlock'

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
          <TemperatureBlock pathToIcon={pathToIcon} description={weather.weather[0].description}/>
          <div className="info-block-additional info-block-additional-second">
            <CommonWeatherProperty property={weather.pressure + 'hPa'} src="/img/Pressure.svg" />
            <CommonWeatherProperty property={weather.humidity + '%'} src="/img/Humidity.svg" />
            <CommonWeatherProperty property={weather.speed + 'mps'} src="/img/Wind.svg" />
          </div>
        </div>
        <div className="forecast-block-content-wrapper-right">
          <ForecastDayPeriod value={ Math.round(weather.temp.night) + '°'} time="Night" />
          <ForecastDayPeriod value={ Math.round(weather.temp.morn) + '°'} time="Morning" />
          <ForecastDayPeriod value={ Math.round(weather.temp.day) + '°'} time="Day" />
          <ForecastDayPeriod value={ Math.round(weather.temp.eve) + '°'} time="Evening" />
        </div>
      </div>
    )
  }
}
