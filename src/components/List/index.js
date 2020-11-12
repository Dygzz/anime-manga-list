import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Card from '../Card'
import {
  favoriteExist,
  addFavorite,
  deleteFavorite
} from '../../services/favoriteServices'

const List = props => {
  return (
    <DivContainer>
      {props.myList.map(e => {
        return (
          <Card
            key={e.mal_id}
            src={e.image_url}
            urlLink={props.type + '/' + e.mal_id}
            title={e.title}
            isFavorite={favoriteExist(e.mal_id, props.type)}
            deleteFavorite={() => deleteFavorite(e.mal_id, props.type)}
            addFavorite={() => addFavorite(e, props.type)}
          />
        )
      })}
    </DivContainer>
  )
}

List.propTypes = {
  myList: PropTypes.array,
  type: PropTypes.string
}

const DivContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export default List
