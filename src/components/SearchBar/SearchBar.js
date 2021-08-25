/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/destructuring-assignment */
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Autosuggest from 'react-autosuggest';
import { Button, Dropdown } from 'react-bootstrap';
import Dropdowns from './Dropdown';
import searchMatches from '../../utils/searchMatches';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      suggestions: [],
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(city) {
    const { onSelect } = this.props;

    onSelect(city);
  }

  renderSuggestion(suggestion) {
    return (
      <div className="input-list_item">
        {suggestion.name}
        {' '}
        {suggestion.country}
      </div>
    );
  }

  renderSuggestionUl({ containerProps, children }) {
    return (
      <div {...containerProps} className="input-list">
        {children}
      </div>
    );
  }

  render() {
    const {
      onClick,
      cities,
      onSelect,
      selectedCity,
      favorites,
      onChange,
      inputValue,
    } = this.props;
    const self = this;

    const favoritesList = favorites.map((city) => (
      <li key={city.id}>
        <Dropdown.Item onClick={() => self.handleClick(city)}>
          {city.name}
        </Dropdown.Item>
      </li>
    ));

    const inputProps = {
      placeholder: 'Search for...',
      value: inputValue,
      onChange: (e) => onChange(e.target.value),
      className: 'input',
    };

    return (
      <div className="search input-group">
        <Dropdowns
          favoritesList={favoritesList}
          selectedCity={selectedCity}
        />
        <Autosuggest
          suggestions={searchMatches(this.state.suggestions, inputValue, 3)}
          onSuggestionsFetchRequested={() => this.setState({ suggestions: cities.slice() })}
          onSuggestionsClearRequested={() => this.setState({ suggestions: [] })}
          getSuggestionValue={(suggestions) => suggestions.name}
          onSuggestionSelected={(_, { suggestion }) => onSelect(suggestion)}
          renderSuggestion={this.renderSuggestion}
          renderSuggestionsContainer={this.renderSuggestionUl}
          inputProps={inputProps}
        />
        <Button variant="outline-secondary" onClick={() => onClick()}>
          Search
        </Button>
      </div>
    );
  }
}

SearchBar.propTypes = {
  cities: PropTypes.array,
  favorites: PropTypes.array,
  inputValue: PropTypes.string,
  selectedCity: PropTypes.object,
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  onSelect: PropTypes.func,
};
