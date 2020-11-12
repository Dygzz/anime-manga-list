import React, { useState, useEffect } from 'react'
import { getOneAnime } from '../services/animeServices'
import Details from '../components/Details'

const Anime = props => {
  const [anime, setAnime] = useState('')
  useEffect(() => {
    // eslint-disable-next-line react/prop-types
    getOneAnime(props.match.params.id).then(r => {
      setAnime(r.data)
    })
  }, [])

  return (
    <Details
      title={anime.title}
      descriptionSpan={"Nombre d'episode: " + anime.episodes}
      description={anime.synopsis}
      src={anime.image_url}
    />
  )
}

export default Anime
