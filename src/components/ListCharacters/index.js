import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Avatar from '../Avatar'

const ListCharacters = ({ characters }) => {
  return (
    <DivContainer>
      {characters.map(e => (
        <DivCharacter key={e.mal_id}>
          <NameCharacter>{e.name}</NameCharacter>
          <Avatar src={e.image_url} />
        </DivCharacter>
      ))}
    </DivContainer>
  )
}

ListCharacters.propTypes = {
  characters: PropTypes.array
}

const DivCharacter = styled.div`
  display: flex;
  flex-direction: column;
  width: 45%;
`

const NameCharacter = styled.p`
  align-self: center;
  color: #ba5a31;
  font-weight: bold;
`

const DivContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  flex-wrap: wrap;
`

export default ListCharacters
