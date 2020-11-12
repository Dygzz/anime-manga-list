import React from 'react'
import PropTypes from 'prop-types'
import Avatar from '../Avatar'
import styled from 'styled-components'

const AnimeDetails = props => {
  return (
    <DivContainer>
      <Title>{props.title}</Title>
      <Avatar src={props.src} />
      <SpanStyle>{props.descriptionSpan}</SpanStyle>
      <Description>{props.description}</Description>
    </DivContainer>
  )
}

AnimeDetails.propTypes = {
  title: PropTypes.string,
  src: PropTypes.string,
  description: PropTypes.string,
  descriptionSpan: PropTypes.string
}

const Title = styled.h1`
  text-align: center;
  color: #729ea1;
`

const SpanStyle = styled.span`
  color: #ba5a31;
  align-self: center;
`

const Description = styled.p`
  white-space: pre-line;
  text-align: justify;
  color: #39393a;
`

const DivContainer = styled.div`
  width: 80%;
  margin: auto;
  display: flex;
  flex-direction: column;
`
export default AnimeDetails
