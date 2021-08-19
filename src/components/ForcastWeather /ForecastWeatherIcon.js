import React from 'react'
import PropTypes from 'prop-types'
import degreesIcon from '../../constants'

export default class ForecastWeatherIcon extends React.Component {
    render() {
      const { pathToIcon, description, temp } = this.props
      return (
        <span>
          <div className="forecast-block-content-temperature">
            <img src={pathToIcon} className="weather-icon-size" />
            {temp && (
              <span>
                {temp}
                {degreesIcon}
              </span>
            )}
          </div>
          <div className="info-block-additional forecast-block-additional-first">
            <div className="info-block-additional-item">
              {description}
            </div>
          </div>
        </span>
      );
    }
  }
  ForecastWeatherIcon.propTypes = {
    pathToIcon: PropTypes.string,
    degreesIcon: PropTypes.string,
    description: PropTypes.string
  }