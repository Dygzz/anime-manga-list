import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import List from '../components/List'
import { getAnimeList } from '../services/animeServices'
import { getMangaList } from '../services/mangaServices'

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
      <Title>Liste des nouveaux Anime</Title>
      <div>
        <button onClick={() => setIsAnime(true)}>Anime</button>
        <button onClick={() => setIsAnime(false)}>Mangas</button>
      </div>
      <List
        myList={isAnime ? anime : mangas}
        urlDetails={isAnime ? 'anime/' : 'manga/'}
      />
    </DivContainer>
  )
}

const DivContainer = styled.div``

const Title = styled.h1`
  text-align: center;
  color: #729ea1;
`

export default Home
