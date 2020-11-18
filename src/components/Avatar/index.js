import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Avatar = props => {
  return <AvatarImg src={props.src} />
}

Avatar.propTypes = {
  src: PropTypes.string
}
const AvatarImg = styled.img`
  border: 1px solid #39393a;
  height: auto;
  width: 100%;
`

export default Avatar
