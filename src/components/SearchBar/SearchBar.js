import React, { Component } from 'react'
import Input from './Input'
import Dropdown from './Dropdown'

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
    let self = this
    let favoritesList = favorites.map(function (city) {
      return (
        <li key={city.id}>
          <a href="#" onClick={() => self.handleClick(city)}>
            {city.name}
          </a>
        </li>
      );
    });

    return(
      <div className="search input-group">
        <Dropdown
        favoritesList={favoritesList}
        selectedCity={selectedCity}
        />
        <Input 
        cities={ cities }
         onSelect={ city => onSelect(city) }
         />
        <span className="input-group-btn">
          <button className="btn btn-default" type="button" onClick={ () => onClick() }>{'Search'}</button>
        </span>
      </div>
    )
  }
}
