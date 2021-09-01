import PropTypes from "prop-types";
import { Translation } from "react-i18next";
import React, { Component } from "react";
import ForecastBlock from "./ForecastBlock";

export default class ForecastInfo extends Component {
  render() {
    const { cityName, onClick, days } = this.props;

    const setDays = days.map((day) => (
      <ForecastBlock key={day.dt} weather={day} />
    ));

    return (
      <Translation>
        {(t) => (
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
        )}
      </Translation>
    );
  }
}

ForecastInfo.propTypes = {
  cityName: PropTypes.string,
  onClick: PropTypes.func,
  days: PropTypes.array,
};
