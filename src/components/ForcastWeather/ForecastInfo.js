import PropTypes from "prop-types";
import { withTranslation } from "react-i18next";
import React, { Component } from "react";
import ForecastBlock from "./ForecastBlock";

class ForecastInfo extends Component {
  render() {
    const {
      cityName, onClick, days, t,
    } = this.props;

    const setDays = days.map((day) => (
      <ForecastBlock key={day.dt} weather={day} />
    ));

    return (
      <div className="forecast-info">
        <div className="info-block block-border">
          <h1 className="header">
            {t("ForecastFor")}
            {days.length}
            {days.length > 4 ? `${t("DaysIn")}` : `${t("DayIn")}`}
            {cityName}
          </h1>
          <div className="info-block-header-right">
            <button type="button" onClick={onClick}>
              {t("BackToCurrentWeather")}
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
  t: PropTypes.func,
};

export default withTranslation()(ForecastInfo);
