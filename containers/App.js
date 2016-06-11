import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as weatherActions from '../actions/WeatherActions'
import * as cityActions from '../actions/CityActions'

import SearchBar from '../components/SearchBar'
import WeatherInfo from '../components/WeatherInfo'
import ForecastInfo from '../components/ForecastInfo'

class App extends Component {

  componentDidMount() {
    this.props.cityActions.fetchCities()
  }

  handleSearch() {
    var cityName = document.getElementById('city').value
    this.props.weatherActions.fetchWeather(cityName)
    this.props.cityActions.selectCity(cityName)
  }

  handleForecast(e) {
    var cityName = document.getElementById('city').value
    this.props.weatherActions.fetchForecast(cityName, e.target.id)
  }

  render() {
    const { weather, error, forecast } = this.props.weatherByCity
    const { isFetching, cities } = this.props.city
    return (
      <div className="container">

        { isFetching &&
          <img src="/img/loading.gif" className="loading-icon-position"/>
        }

        { !isFetching && cities &&
          <SearchBar cities={ cities } onClick = { () => this.handleSearch() } />
        }

        { error &&
          <div className="alert alert-danger alert-margin" role="alert" >{ error }</div>
        }

        { weather &&
          <WeatherInfo weather={ weather } onClick = { e => this.handleForecast(e) }/>
        }

        { forecast &&
          <ForecastInfo days= { forecast.list } />
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
