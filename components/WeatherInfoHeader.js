import React, { Component } from 'react'

export default class WeatherInfoHeader extends Component {
  render() {
    const { weather, onClick } = this.props
    const options = { weekday: 'long', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric'}

    return(
      <div className="info-block-header">
        <div className="info-block-header-left">
          <div className="info-block-header-left-place">
            <span>{weather.name}{', '} {weather.sys.country} </span>
          </div>
          <div className="info-block-header-left-date">
            <span>{new Date(weather.dt * 1000).toLocaleString('en-US', options)} </span>
          </div>
        </div>
        <div className="info-block-header-right">
          {'Forecast: '}
          <a href="#" onClick={ e => onClick(e) } id="3">{'3 days '}</a>
          <a href="#" onClick={ e => onClick(e) } id="7">{' 7 days '}</a>
          <a href="#" onClick={ e => onClick(e) } id="14">{' 14 days'}</a>
        </div>
      </div>
    )}
}
