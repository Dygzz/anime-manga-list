import React from 'react'
import PropTypes from 'prop-types'

const AnimeDetails = props => {
  return (
    <div>
      <h1>{props.title}</h1>
      <img src={props.src} alt='' />
      <span>{"Nombre d'episode : " + props.episode}</span>
      <p>{props.description}</p>
    </div>
  )
}

AnimeDetails.propTypes = {
  title: PropTypes.string,
  src: PropTypes.string,
  episode: PropTypes.string,
  description: PropTypes.string
}
export default AnimeDetails
