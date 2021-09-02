import React from "react";
import PropTypes from "prop-types";
import { degreesIcon } from "../../constants";

export default class ForecastWeatherIcon extends React.Component {
  render() {
    const { pathToIcon, description, temp } = this.props;
    return (
      <span>
        <div className="forecast-block-content-temperature">
          <img
            src={process.env.PUBLIC_URL + pathToIcon}
            className="weather-icon-size"
            alt="weather-icon"
          />
          {temp && (
            <span>
              {temp}
              {degreesIcon}
            </span>
          )}
        </div>
        <div className="info-block-additional forecast-block-additional-first">
          <div className="info-block-additional-item">{description}</div>
        </div>
      </span>
    );
  }
}

ForecastWeatherIcon.propTypes = {
  temp: PropTypes.number,
  pathToIcon: PropTypes.string,
  description: PropTypes.string,
};
