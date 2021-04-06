import React from 'react'
import CommonWeatherProperty from './CommonWeatherProperty'
import TemperatureBlock from './TemperatureBlock'

export default class WeatherMainInfo extends React.Component {
    render() {
        const { weather, pathToIcon } = this.props
        return (
            <div className="info-block-content">
                <div className="info-block-content-wrapper-left">
                    <TemperatureBlock temp={Math.round(weather.main.temp)} pathToIcon={pathToIcon} description={weather.weather[0].description} />

                    <div className="info-block-additional info-block-additional-second">
                        <CommonWeatherProperty property={weather.main.pressure + 'hPa'} src="/img/Pressure.svg" />
                        <CommonWeatherProperty property={weather.main.humidity + '%'} src="/img/Humidity.svg" />
                        <CommonWeatherProperty property={weather.wind.speed + 'mps'} src="/img/Wind.svg" />

                        <div className="info-block-additional-item">
                            <CommonWeatherProperty sun property={new Date(weather.sys.sunrise * 1000).toLocaleTimeString()} src={"/img/Sunrise.svg"} />
                            <CommonWeatherProperty sun property={new Date(weather.sys.sunset * 1000).toLocaleTimeString()} src={"/img/Sunset.svg"} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}