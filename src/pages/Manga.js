import React, { useState, useEffect } from 'react'
import { getOneManga, getCharactersManga } from '../services/mangaServices'
import Details from '../components/Details'

const Manga = props => {
  const [manga, setManga] = useState('')
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    // eslint-disable-next-line react/prop-types
    getOneManga(props.match.params.id).then(r => {
      setManga(r.data)
    })
    // eslint-disable-next-line react/prop-types
    getCharactersManga(props.match.params.id).then(r => {
      setCharacters(r.data.characters)
    })
  }, [])
  return (
    <Details
      title={manga.title}
      titleTwo='Liste des Personnage'
      descriptionSpan={
        manga.volumes !== null
          ? 'Nombre de Volumes: ' + manga.volumes
          : 'Nombre de volume inconnu'
      }
      description={manga.synopsis}
      src={manga.image_url}
      characters={characters}
    />
  )
}

export default Manga
