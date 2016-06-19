import React, { Component } from 'react'
import Typeahead from './Typeahead'

export default class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(city) {
    const { onClick } = this.props
    document.getElementById('city').value = city.name

    onClick()
  }

  render(){
    const { onClick, cities, onSelect, selectedCity, favorites } = this.props
    var self = this
    var favoritesList = favorites.map(function(city) {
      return <li key={ city.id }><a href="#" onClick={ () => self.handleClick(city) }>{city.name}</a></li>
    })

    return(
      <div className="search input-group">
        <div className="input-group-btn">
          <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            {selectedCity ? selectedCity.name + ' ' : ' '}
            <span className="caret"></span>
          </button>
          <ul className="dropdown-menu">
            { favoritesList }
            <li role="separator" className="divider"></li>
            <li><a><img src="/img/Favorites-Add.svg" />Add city to favorites by clicking icon by near</a></li>
          </ul>
        </div>

        <Typeahead cities={ cities } onSelect={ city => onSelect(city) }/>
        <span className="input-group-btn">
          <button className="btn btn-default" type="button" onClick={ () => onClick() }>{'Search'}</button>
        </span>
      </div>
    )
  }
}
