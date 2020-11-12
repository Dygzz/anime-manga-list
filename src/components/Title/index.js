import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Title = props => {
  return <TitleStyle>{props.text}</TitleStyle>
}

const TitleStyle = styled.h2`
  text-align: center;
  color: #ba5a31;
`
Title.propTypes = {
  text: PropTypes.string
}

export default Title
