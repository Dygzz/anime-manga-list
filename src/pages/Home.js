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
  const [indexManga, setIndexManga] = useState(2)
  const [indexAnime, setIndexAnime] = useState(2)
  const [errorMessage, setErrorMessage] = useState('')
  useEffect(() => {
    getMangaList()
      .then(r => setMangas(r.data.top))
      .catch(err => console.log(err))

    getAnimeList()
      .then(r => setAnime(r.data.top))
      .catch(err => console.log(err))
  }, [])

  useEffect(() => {
    window.onscroll = () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        if (isAnime) {
          getAnimeList(indexAnime)
            .then(r => {
              setAnime(anime.concat(r.data.top))
              setIndexAnime(indexAnime + 1)
            })
            .catch(() => {
              setErrorMessage("Il n' y a pas d' autre Anime")
            })
        } else {
          getMangaList(indexManga)
            .then(r => {
              setMangas(mangas.concat(r.data.top))
              setIndexManga(indexManga + 1)
            })
            .catch(() => {
              setErrorMessage("Il n' y a pas d' autre Manga")
            })
        }
      }
    }
  })

  return (
    <DivContainer>
      <Title>{isAnime ? 'Liste des top Anime' : 'Liste des top Mangas'}</Title>
      <ChooseList
        funcOne={() => {
          setIsAnime(true)
          setErrorMessage('')
        }}
        funcTwo={() => {
          setIsAnime(false)
          setErrorMessage('')
        }}
        textOne='Anime'
        textTwo='Mangas'
      />
      <List
        myList={isAnime ? anime : mangas}
        type={isAnime ? 'anime' : 'manga'}
        forChange={deleteFavorite}
      />
      <ErrorMessage>{errorMessage}</ErrorMessage>
    </DivContainer>
  )
}

const DivContainer = styled.div``

const Title = styled.h1`
  margin: 0;
  text-align: center;
  color: #729ea1;
`

const ErrorMessage = styled.p`
  color: #ba5a31;
`

export default Home
