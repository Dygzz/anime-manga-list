import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
// import styled from 'styled-components'

const Card = props => {
  const [isFavorite, setIsFavorite] = useState(props.isFavorite)

  const handleChange = () => {
    if (isFavorite) {
      props.deleteFavorite()
      setIsFavorite(false)
    } else {
      props.addFavorite()
      setIsFavorite(true)
    }
  }

  return (
    <div>
      <h2>{props.title}</h2>
      <img src={props.src} alt='' />
      <Link to={props.urlLink}>Détails</Link>
      <button onClick={handleChange}>
        {isFavorite ? 'supprimer des favoris' : 'ajouter au favoris'}
      </button>
    </div>
  )
}

Card.propTypes = {
  urlLink: PropTypes.string,
  title: PropTypes.string,
  src: PropTypes.string,
  isFavorite: PropTypes.bool,
  deleteFavorite: PropTypes.func,
  addFavorite: PropTypes.func
}

export default Card
