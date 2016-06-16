import React, { Component } from 'react'
import Typeahead from './Typeahead'

export default class SearchBar extends Component {
  render(){
    const { onClick, cities, onSelect } = this.props
    return(
      <div className="search input-group">
        <Typeahead cities={ cities } onSelect={ city => onSelect(city) }/>
        <span className="input-group-btn">
          <button className="btn btn-default" type="button" onClick={ () => onClick() }>{'Search'}</button>
        </span>
      </div>
    )
  }
}
