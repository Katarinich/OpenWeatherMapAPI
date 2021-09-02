import React from "react";
import PropTypes from "prop-types";

export default class ParametrsForecastWeather extends React.Component {
  render() {
    const { src, description } = this.props;
    return (
      <div className="info-block-additional-item">
        <img
          src={process.env.PUBLIC_URL + src}
          className="additional-icon-size"
          alt="forc-weather-par"
        />
        {description}
      </div>
    );
  }
}

ParametrsForecastWeather.propTypes = {
  description: PropTypes.string,
  src: PropTypes.string,
};
