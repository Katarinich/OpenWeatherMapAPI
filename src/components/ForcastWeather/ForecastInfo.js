import PropTypes from "prop-types";
import React, { Component } from "react";
import ForecastBlock from "./ForecastBlock";

export default class ForecastInfo extends Component {
  render() {
    const { cityName, onClick, days } = this.props;

    const setDays = days.map((day) => (
      <ForecastBlock key={day.dt} weather={day} />
    ));

    return (
      <div className="forecast-info">
        <div className="info-block block-border">
          <h1 className="header">
            Forecast for
            {' '}
            {days.length}
            {' '}
            days in
            {' '}
            {cityName}
          </h1>
          <div className="info-block-header-right">
            <button type="button" onClick={onClick}>
              Back to current weather
            </button>
          </div>
        </div>
        {setDays}
      </div>
    );
  }
}

ForecastInfo.propTypes = {
  cityName: PropTypes.string,
  onClick: PropTypes.func,
  days: PropTypes.array,
};
