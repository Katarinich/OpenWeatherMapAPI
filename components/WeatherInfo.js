import React, { Component } from 'react'

export default class WeatherInfo extends Component {
  render() {
    const { weather } = this.props
    return(
      <div className="info-block">
        <div className="info-block-header">
          <div className="info-block-header-left">
            <span>{weather.name}{', '} {weather.sys.country} </span>
            <span>{new Date(weather.dt * 1000).toLocaleString()} </span>
            <span>{weather.main.temp}{'K'}</span>
          </div>
        </div>
      </div>
    )}
}
