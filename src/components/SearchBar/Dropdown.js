import React from 'react'
import PropTypes from 'prop-types'
import { Dropdown } from 'react-bootstrap';

export default class Dropdowns extends React.Component {
  
  render() {
    const { selectedCity, favoritesList } = this.props
    return (
      <Dropdown id="dropdown-basic-button" className="drop-down input-group-btn">
        <Dropdown.Toggle className="drop-down_toggle" variant="outline-secondary" id="dropdown-basic">
          {selectedCity ? selectedCity.name + ' ' : ' '}
        </Dropdown.Toggle>

        <Dropdown.Menu className="drop-down_menu">
          {favoritesList}
          <Dropdown.Divider />
          <span>
              <img src={process.env.PUBLIC_URL + 'images/Favorites-Add.svg'} />
              Add city to favorites by clicking icon by near
          </span>
        </Dropdown.Menu>
      </Dropdown>
    );
  }
}

Dropdown.propsTypes = {
  selectedCity: PropTypes.object,
  favoritesList: PropTypes.array
}