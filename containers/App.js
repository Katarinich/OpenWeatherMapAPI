import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as weatherActions from '../actions/WeatherActions'
import * as cityActions from '../actions/CityActions'

import SearchBar from '../components/SearchBar'
import WeatherInfo from '../components/WeatherInfo'

class App extends Component {

  handleClick() {
    var cityName = document.getElementById('city').value
    this.props.weatherActions.fetchWeather(cityName)
    this.props.cityActions.selectCity(cityName)
  }

  render() {
    const { weather } = this.props.weatherByCity
    return (
      <div className="container">
        <SearchBar onClick = { () => this.handleClick() } />
          { weather &&
            // <span>
            //   Last updated at {new Date(lastUpdated).toLocaleTimeString()}.
            //   {' '}
            // </span>
            <WeatherInfo weather={ weather } />
          }
      </div>
  )}
}

function mapStateToProps(state) {
  return state
}

function mapDispatchToProps(dispatch) {
  return {
    weatherActions: bindActionCreators(weatherActions, dispatch),
    cityActions: bindActionCreators(cityActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
