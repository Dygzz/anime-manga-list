import React, { useState, useEffect } from 'react'
import ChooseList from '../components/ChooseList'
import List from '../components/List'
import styled from 'styled-components'
import { deleteFavorite, getFavorites } from '../services/favoriteServices'

const Favorite = () => {
  const [listFavorite, setListFavorite] = useState([])
  const [isAnime, setIsAnime] = useState(true)

  useEffect(() => {
    let type = isAnime ? 'anime' : 'manga'
    setListFavorite(getFavorites(type))
  }, [])

  const handleChange = isManga => {
    if (isManga) {
      setIsAnime(false)
      setListFavorite(getFavorites('manga'))
    } else {
      setIsAnime(true)
      setListFavorite(getFavorites('anime'))
    }
  }

  const handleChangeSuppFavorite = (id, type) => {
    deleteFavorite(id, type)
    setListFavorite(JSON.parse(localStorage.getItem('favorite' + type)))
  }
  return (
    <div>
      <ChooseList
        funcOne={() => handleChange(false)}
        funcTwo={() => handleChange(true)}
        textOne='Anime'
        textTwo='Mangas'
      />
      {listFavorite.length !== 0 ? (
        <List
          myList={listFavorite}
          type={isAnime ? 'anime' : 'manga'}
          forChange={handleChangeSuppFavorite}
        />
      ) : (
        <TextStyled>
          {isAnime
            ? "Vous n'avez pas d'anime Favori"
            : "Vous n'avez pas de mangas Favori"}
        </TextStyled>
      )}
    </div>
  )
}

const TextStyled = styled.p`
  color: #ba5a31;
  text-align: center;
  font-weight: bold;
`

export default Favorite
