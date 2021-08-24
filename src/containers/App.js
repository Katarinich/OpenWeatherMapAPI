import '../static/css/style.css'
import { connect } from 'react-redux'
import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import 'bootstrap/dist/css/bootstrap.min.css';
import * as cityActions from '../store/city/actions'
import SearchBar from '../components/SearchBar/SearchBar'
import * as weatherActions from '../store/weatherByCity/actions'
import ForecastInfo from '../components/ForcastWeather/ForecastInfo'
import WeatherInfo from '../components/ForcastWeather/WeatherInfo/WeatherInfo'

class App extends Component {

  componentDidMount() {
    const { fetchCities, loadFavoritesList } = this.props.cityActions
    fetchCities()

    let favorites = JSON.parse(localStorage.getItem('favorites')) || []
    loadFavoritesList(favorites)
    this.handleSearch = this.handleSearch.bind(this)
    this.handleForecast = this.handleForecast.bind(this)
  }

  handleSearch() {
    let { selectedCity, inputValue } = this.props.city

    const { fetchWeatherById, fetchWeatherByName } = this.props.weatherActions

    if (selectedCity !== undefined && selectedCity.name === inputValue) {
      fetchWeatherById(selectedCity)
    } else {
      fetchWeatherByName(inputValue || '')
    }
  }

  handleForecast(e) {
    this.props.weatherActions.fetchForecast(this.props.city.selectedCity, e.target.id)
  }

  render() {
    const { cityActions } = this.props
    const { weather, error, forecast } = this.props.weatherByCity
    const { isFetching, cities, selectedCity, favorites, inputValue } = this.props.city
    return (
      <div className="container">

        { isFetching &&
          <img src="/images/loading.gif" className="loading-icon-position"/>
        }

        { !isFetching && cities &&
          <SearchBar
          cities={cities}
          favorites={favorites}
          selectedCity={selectedCity}
          onClick={this.handleSearch}
          onSelect={cityActions.selectCity}
          onChange={cityActions.changeSearchInput}
          inputValue={inputValue || ''}
          />
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
