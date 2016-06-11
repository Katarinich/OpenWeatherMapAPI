import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as weatherActions from '../actions/WeatherActions'
import * as cityActions from '../actions/CityActions'

import SearchBar from '../components/SearchBar'
import WeatherInfo from '../components/WeatherInfo'

class App extends Component {

  componentDidMount() {
    this.props.cityActions.fetchCities()
  }

  handleClick() {
    var cityName = document.getElementById('city').value
    this.props.weatherActions.fetchWeather(cityName)
    this.props.cityActions.selectCity(cityName)
  }

  render() {
    const { weather } = this.props.weatherByCity
    const { isFetching, cities } = this.props.city
    return (
      <div className="container">

        {isFetching &&
          <img src="/img/loading.gif" className="loading-icon-position"/>
        }

        {!isFetching && cities &&
          <SearchBar onClick = { () => this.handleClick() } />
        }

        { weather &&
          <WeatherInfo weather={ weather } />
        }
      </div>
  )}
}

function mapStateToProps(state) {
  const { city } = state

  if(!city.cities) return {
    ...state,
    cities: {
      isFetching: true
    }
  }

  return state
}

function mapDispatchToProps(dispatch) {
  return {
    weatherActions: bindActionCreators(weatherActions, dispatch),
    cityActions: bindActionCreators(cityActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
