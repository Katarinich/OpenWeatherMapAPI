import React from "react";
import PropTypes from "prop-types";

export default class ForecastForToday extends React.Component {
  render() {
    const { value, time } = this.props;
    return (
      <div className="day-period">
        <div className="day-time">{time}</div>
        <div className="day-temp">{value}</div>
      </div>
    );
  }
}
ForecastForToday.propTypes = {
  value: PropTypes.string,
  time: PropTypes.string,
};
