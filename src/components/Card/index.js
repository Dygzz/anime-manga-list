import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Avatar from '../Avatar'
import Title from '../Title'
import styled from 'styled-components'

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
    <DivContainer>
      <Title text={props.title} />
      <Avatar src={props.src} />

      <DivContaineButton>
        <LinkStyled to={props.urlLink}>Détails</LinkStyled>
        <ButtonStyle onClick={handleChange}>
          {isFavorite ? 'Supprimer des favoris' : 'Ajouter au favoris'}
        </ButtonStyle>
      </DivContaineButton>
    </DivContainer>
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

const DivContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  align-self: center;
`

const DivContaineButton = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 6px;
`

const ButtonStyle = styled.button`
  background-color: transparent;
  color: #39393a;
  border: 1px solid #39393a;
  &:focus {
    outline: none;
  }
`

const LinkStyled = styled(Link)`
  text-decoration: none;
  color: #39393a;
  text-align: center;
  align-self: center;
  border: 1px solid #39393a;
  width: 20%;
`

export default Card
