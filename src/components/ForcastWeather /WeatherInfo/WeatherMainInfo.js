import React from 'react'
import PropTypes from 'prop-types'
import SunriseSunset from '../SunriseSunset'
import ForecastWeatherIcon from '../ForecastWeatherIcon'
import ParametrsForecastWeather from '../ParametersForecastWeather'
import { pressureValue, humidityValue, speedValue} from '../../../constants'

export default class WeatherMainInfo extends React.Component {
  render() {
    const { weather, pathToIcon } = this.props
    return (
        <div className="info-block-content">
        <div className="info-block-content-wrapper-left">

          <ForecastWeatherIcon
            pathToIcon={pathToIcon}
            description={weather.weather[0].description}
            temp={Math.round(weather.main.temp)}
          />
          <div className="info-block-additional info-block-additional-second">
            <ParametrsForecastWeather
              description={weather.main.pressure + pressureValue}
              src={'/img/Pressure.svg'}
            />
            <ParametrsForecastWeather
              description={weather.main.humidity + humidityValue}
              src={'/img/Humidity.svg'}
            />            
            <ParametrsForecastWeather
                description={weather.wind.speed + speedValue}
                src={'/img/Wind.svg'}
            />
            <div className="info-block-additional-item">
                <SunriseSunset
                    src={"/img/Sunrise.svg"}
                    value={new Date(weather.sys.sunrise * 1000).toLocaleTimeString()}
                />
                <SunriseSunset
                    src={"/img/Sunset.svg"}
                    value={new Date(weather.sys.sunset * 1000).toLocaleTimeString()}
                />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

WeatherMainInfo.propTypes = {
  weather: PropTypes.object,
  pathToIcon: PropTypes.string
}