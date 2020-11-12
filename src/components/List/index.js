import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Card from '../Card'

const List = props => {
  return (
    <DivContainer>
      {props.myList.map(e => {
        return (
          <Card
            src={e.image_url}
            urlLink={props.urlDetails + e.mal_id}
            title={e.title}
            key={e.mal_id}
          />
        )
      })}
    </DivContainer>
  )
}

List.propTypes = {
  myList: PropTypes.array,
  urlDetails: PropTypes.string
}

const DivContainer = styled.div`
  display: flex;
`

export default List
