import React, { Component } from 'react'
import Handlebars from 'handlebars'
import findMatches from '../helper/findMatches'



class Typeahead extends Component {
  componentDidMount() {
    const { onSelect, onChange } = this.props
    $('#city').typeahead({
      hint: true,
      highlight: true,
      minLength: 1
    },
    {
      name: 'cities',
      display: 'name',
      source: /*this.substringMatcher(this.props.cities)*/findMatches.bind(this),
      templates: {
        suggestion: Handlebars.compile('<div>{{name}}, {{country}}</div>')
    }
    })

    //document.getElementsByClassName('twitter-typeahead')[0].style.display = 'block'
    $('.twitter-typeahead').css('display', 'block')

    $('.typeahead').bind('typeahead:select', (ev, suggestion) => onSelect(suggestion))

    $('.typeahead').bind('input', e => onChange(e.target.value))
  }

  /*substringMatcher(strs) {
    return function findMatches(q, cb) {
      let matches, substrRegex

      matches = []

      substrRegex = new RegExp(q, 'i')

      $.each(strs, function(i, str) {
        if (substrRegex.test(str.name)) {
          matches.push(str)
        }
      })
      cb(matches)
    }
  }*/

  render() {
    return <input
      className="typeahead form-control"
      type="text"
      placeholder="Search for..."
      value={this.props.inputText}
      id="city" />
  }
}

export default Typeahead
