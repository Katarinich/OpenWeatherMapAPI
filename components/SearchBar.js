import React, { Component } from 'react'

export default class SearchBar extends Component {
  render(){
    const { onClick } = this.props
    return(
      <div className="search input-group">
        <input type="text" className="form-control" placeholder="Search for..." id="city"/>
        <span className="input-group-btn">
          <button className="btn btn-default" type="button" onClick={ () => onClick() }>{'Search'}</button>
        </span>
      </div>
    )
  }
}
