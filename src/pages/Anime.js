import React, { useState, useEffect } from 'react'
import { getOneAnime, getCharactersAnime } from '../services/animeServices'
import Details from '../components/Details'

const Anime = props => {
  const [anime, setAnime] = useState('')
  const [characters, setCharacters] = useState([])
  useEffect(() => {
    // eslint-disable-next-line react/prop-types
    getOneAnime(props.match.params.id).then(r => {
      setAnime(r.data)
    })
    // eslint-disable-next-line react/prop-types
    getCharactersAnime(props.match.params.id).then(r => {
      setCharacters(r.data.characters)
    })
  }, [])

  return (
    <Details
      title={anime.title}
      titleTwo='Liste des Personnage'
      descriptionSpan={"Nombre d'episode: " + anime.episodes}
      description={anime.synopsis}
      src={anime.image_url}
      characters={characters}
    />
  )
}
//characters.name
//characters.image_url
export default Anime
