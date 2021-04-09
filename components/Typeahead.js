import React, { Component } from 'react'
import Handlebars from 'handlebars'
import findMatches from '../helper/findMatches'

class Typeahead extends Component {
  componentDidMount() {
    const { onSelect, onChange } = this.props
    $('#city').typeahead(
      {
        hint: true,
        highlight: true,
        minLength: 1
      },
      {
        name: 'cities',
        display: 'name',
        source: findMatches.bind(this),
        templates: {
          suggestion: Handlebars.compile('<div>{{name}}, {{country}}</div>')
        }
      }
    )

    $('.twitter-typeahead').css('display', 'block')

    $('.typeahead').bind('typeahead:select', (ev, suggestion) =>
      onSelect(suggestion)
    )

    $('.typeahead').bind('input', (e) => onChange(e.target.value))
  }

  render() {
    const { inputText } = this.props
    return (
      <input
        className="typeahead form-control"
        type="text"
        placeholder="Search for..."
        value={inputText}
        id="city"
      />
    )
  }
}

export default Typeahead
