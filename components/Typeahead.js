import React, { Component } from 'react'
import  Handlebars from 'handlebars'

export default class Typeahead extends Component {
  componentDidMount() {
    $('#city').typeahead({
      hint: true,
      highlight: true,
      minLength: 1
    },
    {
      name: 'cities',
      display: 'name',
      source: this.substringMatcher(this.props.cities),
      templates: {
        suggestion: Handlebars.compile('<div>{{name}}, {{country}}</div>')
      }
    })

    document.getElementsByClassName('twitter-typeahead')[0].style.display = 'block';
  }

  substringMatcher(strs) {
    return function findMatches(q, cb) {
      var matches, substrRegex

      matches = []

      substrRegex = new RegExp(q, 'i')

      $.each(strs, function(i, str) {
        if (substrRegex.test(str.name)) {
          matches.push(str)
        }
      })
      cb(matches)
    }
  }

  render() {
    return <input
      className="typeahead form-control"
      type="text"
      placeholder="Search for..."
      id="city" />
  }
}
