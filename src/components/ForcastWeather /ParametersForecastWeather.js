import React from 'react'

import PropTypes from 'prop-types'

export default class ParametrsForecastWeather extends React.Component {
    render() {
      const { src, description } = this.props
      return (
        <div className='info-block-additional-item'>
          <img src={src} className='additional-icon-size' />
          {description} 
        </div>
      );
    }
  }

  ParametrsForecastWeather.propTypes = {
    src: PropTypes.string
  }