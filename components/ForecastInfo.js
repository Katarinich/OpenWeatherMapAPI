import React, { Component } from 'react'

import ForecastBlock from './ForecastBlock'

export default class ForecastInfo extends Component {
  render() {
    const { cityName, onClick } = this.props

    var days = this.props.days.map(function(day) {
      return <ForecastBlock key={day.dt} weather={ day } />
    })

    return(
      <div className="forecast-info">
        <div className="info-block block-border">
          <h1 className="header"> Forecast for { days.length } days in { cityName }</h1>
            <div className="info-block-header-right">
              <a href="#" onClick={ () => onClick() }>{'Back to current weather'}</a>
            </div>
        </div>
        { days }
      </div>
    )
  }
}
