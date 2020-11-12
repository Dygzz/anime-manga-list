import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import List from '../components/List'
import ChooseList from '../components/ChooseList'
import { getAnimeList } from '../services/animeServices'
import { getMangaList } from '../services/mangaServices'
import { deleteFavorite } from '../services/favoriteServices'

const Home = () => {
  const [anime, setAnime] = useState([])
  const [mangas, setMangas] = useState([])
  const [isAnime, setIsAnime] = useState(true)
  useEffect(() => {
    getMangaList()
      .then(r => setMangas(r.data.top))
      .catch(err => console.log(err))

    getAnimeList()
      .then(r => setAnime(r.data.top))
      .catch(err => console.log(err))
  }, [])

  return (
    <DivContainer>
      <Title>{isAnime ? 'Liste des top Anime' : 'Liste des top Mangas'}</Title>
      <ChooseList
        funcOne={() => setIsAnime(true)}
        funcTwo={() => setIsAnime(false)}
        textOne='Anime'
        textTwo='Mangas'
      />
      <List
        myList={isAnime ? anime : mangas}
        type={isAnime ? 'anime' : 'manga'}
        forChange={deleteFavorite}
      />
    </DivContainer>
  )
}

const DivContainer = styled.div``

const Title = styled.h1`
  margin: 0;
  text-align: center;
  color: #729ea1;
`

export default Home
