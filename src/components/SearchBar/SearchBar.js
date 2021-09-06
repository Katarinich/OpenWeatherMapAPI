/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/destructuring-assignment */
import PropTypes from 'prop-types';
import { withTranslation } from "react-i18next";
import React, { Component } from 'react';
import Autosuggest from 'react-autosuggest';
import { Button, Dropdown } from 'react-bootstrap';
import Dropdowns from './Dropdown';
import searchMatches from '../../utils/searchMatches';
import LanguageSwitcher from './LanguageSwitcher';

class SearchBar extends Component {
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
      onClickLanguage,
      selectedCity,
      favorites,
      onChange,
      onLanguageChange,
      inputValue,
      t,
    } = this.props;

    const favoritesList = favorites.map((city) => (
      <li key={city.id}>
        <Dropdown.Item onClick={() => this.handleClick(city)}>
          {city.name}
        </Dropdown.Item>
      </li>
    ));

    const inputProps = {
      placeholder: t("placeholder"),
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
        <Button variant="outline-secondary" onClick={onClick}>
          {t("Search")}
        </Button>
        <LanguageSwitcher
          onClickLanguage={onClickLanguage}
          onChange={onLanguageChange}
        />
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
  onLanguageChange: PropTypes.func,
  onClickLanguage: PropTypes.func,
  t: PropTypes.func,
};
export default withTranslation()(SearchBar);
