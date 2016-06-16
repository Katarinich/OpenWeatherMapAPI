import React, { Component } from 'react'
import Typeahead from './Typeahead'

export default class SearchBar extends Component {
  handleClick(city) {
    const { onSelect, onClick } = this.props
    onSelect(city)
    onClick()
  }

  render(){
    const { onClick, cities, onSelect, selectedCity, favorites } = this.props
    var favoritesList = favorites.map(function(city) {
      return <li><a href="#" onClick={ () => this.handleClick(city) }>{city.name}</a></li>
    })

    return(
      <div className="search input-group">
        <div className="input-group-btn">
          <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            {selectedCity ? selectedCity.name + " " : " "}
            <span className="caret"></span>
          </button>
          <ul className="dropdown-menu">
            { favoritesList }
            <li role="separator" className="divider"></li>
            <li><img src="/img/Favorites-Add.svg" />Add city to favorites by clicking icon by near</li>
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
