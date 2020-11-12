import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Card from '../Card'
import { favoriteExist, addFavorite } from '../../services/favoriteServices'

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
            deleteFavorite={() => props.forChange(e.mal_id, props.type)}
            addFavorite={() => addFavorite(e, props.type)}
          />
        )
      })}
    </DivContainer>
  )
}

List.propTypes = {
  myList: PropTypes.array,
  type: PropTypes.string,
  forChange: PropTypes.func
}

const DivContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`

export default List
