import React from 'react'
import PropTypes from 'prop-types'
import Avatar from '../Avatar'
import styled from 'styled-components'
import ListCharacters from '../ListCharacters'

const Details = props => {
  return (
    <DivContainer>
      <Title>{props.title}</Title>
      <Avatar src={props.src} />
      <SpanStyle>{props.descriptionSpan}</SpanStyle>
      <Description>{props.description}</Description>
      <TitleTwo>{props.titleTwo}</TitleTwo>
      <ListCharacters characters={props.characters} />
    </DivContainer>
  )
}

Details.propTypes = {
  title: PropTypes.string,
  titleTwo: PropTypes.string,
  src: PropTypes.string,
  description: PropTypes.string,
  descriptionSpan: PropTypes.string,
  characters: PropTypes.array
}

const Title = styled.h1`
  text-align: center;
  color: #729ea1;
`

const TitleTwo = styled.h2`
  text-align: center;
  color: #729ea1;
`

const SpanStyle = styled.span`
  color: #ba5a31;
  font-weight: bold;
  margin-top: 5px;
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
  padding-bottom: 10px;
`
export default Details
