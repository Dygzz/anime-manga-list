import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
// import styled from 'styled-components'

const Card = props => {
  return (
    <div>
      <h2>{props.title}</h2>
      <img src={props.src} alt='' />
      <Link to={props.urlLink}>Détails</Link>
    </div>
  )
}

Card.propTypes = {
  urlLink: PropTypes.string,
  title: PropTypes.string,
  src: PropTypes.string
}

export default Card
