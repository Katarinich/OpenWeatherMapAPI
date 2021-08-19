import React, { Component } from 'react'

import WeatherInfoHeader from './WeatherInfoHeader'
import WeatherMainInfo from './WeatherMainInfo'

export default class WeatherInfo extends Component {
  render() {
    const { weather, selectedCity, favorites, changeFavorites } = this.props
    const pathToIcon = `/img/${weather.weather[0].main}.svg`

    return(
      <div className="info-block">

        <WeatherInfoHeader
          weather={ weather }
          favorites={ favorites }
          selectedCity={ selectedCity }
          changeFavorites = { favorites => changeFavorites(favorites) }
          onClick={ e => this.props.onClick(e) } />

          <WeatherMainInfo weather={weather} pathToIcon={pathToIcon}/>
      </div>
    )}
}
