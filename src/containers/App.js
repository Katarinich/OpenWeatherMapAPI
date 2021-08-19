import { connect } from 'react-redux'
import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import * as cityActions from '../store/city/actions'
import SearchBar from '../components/SearchBar/SearchBar'
import * as weatherActions from '../store/weatherByCity/actions'
import ForecastInfo from '../components/ForcastWeather /ForecastInfo'
import WeatherInfo from '../components/ForcastWeather /WeatherInfo/WeatherInfo'

class App extends Component {

  componentDidMount() {
    this.props.cityActions.fetchCities()

    var favorites = JSON.parse(localStorage.getItem('favorites')) || []
    this.props.cityActions.loadFavoritesList(favorites)
  }

  handleSearch() {
    var { selectedCity } = this.props.city
    var cityName = document.getElementById('city').value
    const { fetchWeatherById,  fetchWeatherByName} = this.props.weatherActions

    if(selectedCity && (selectedCity.name.toLowerCase() != cityName.toLowerCase()))
      selectedCity = undefined

    selectedCity ? fetchWeatherById(selectedCity) : fetchWeatherByName(cityName)
  }

  handleForecast(e) {
    this.props.weatherActions.fetchForecast(this.props.city.selectedCity, e.target.id)
  }

  render() {
    const { weather, error, forecast } = this.props.weatherByCity
    const { isFetching, cities, selectedCity, favorites } = this.props.city
    return (
      <div className="container">

        { isFetching &&
          <img src="/img/loading.gif" className="loading-icon-position"/>
        }

        { !isFetching && cities &&
          <SearchBar
            cities={ cities }
            favorites={ favorites }
            selectedCity={ selectedCity }
            onClick = { () => this.handleSearch() }
            onSelect = { city => this.props.cityActions.selectCity(city) } />
        }

        { error &&
          <div className="alert alert-danger alert-margin" role="alert" >{ error }</div>
        }

        { weather &&
          <WeatherInfo
            weather={ weather }
            selectedCity={ selectedCity }
            favorites={ favorites }
            changeFavorites={ favorites => this.props.cityActions.changeFavorites(favorites) }
            onClick={ e => this.handleForecast(e) }/>
        }

        { forecast &&
          <ForecastInfo
            days={ forecast.list }
            cityName={ forecast.city.name }
            onClick={ () => this.handleSearch() }/>
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
