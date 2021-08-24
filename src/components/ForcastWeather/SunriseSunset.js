import React from 'react'
import PropTypes from 'prop-types'

export default class SunriseSunset extends React.Component {
  render() {
    const { value, src } = this.props
    return (
       <div className={'info-block-additional-item-sun'}>
            <img src={process.env.PUBLIC_URL + src} className='additional-icon-size' />
            {value}
       </div>
    )
  }
}

SunriseSunset.propTypes = {
  src: PropTypes.string,
  sun: PropTypes.bool
}