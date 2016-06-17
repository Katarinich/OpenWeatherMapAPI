import React, { Component } from 'react'

import ForecastBlock from './ForecastBlock'

export default class ForecastInfo extends Component {
  render() {
    var days = this.props.days.map(function(day) {
      return <ForecastBlock key={day.dt} weather={ day } />
    })
    return(
      <div className="forecast-info">
        <div className="info-block">
          <h1> Forecast for { days.count } in
        </div>
        { days }
      </div>
    )
  }
}
