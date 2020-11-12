import React, { useState, useEffect } from 'react'
import { getOneAnime } from '../services/animeServices'
import AnimeDetails from '../components/AnimeDetails'
import { Link } from 'react-router-dom'

const Anime = props => {
  const [anime, setAnime] = useState('')
  useEffect(() => {
    // eslint-disable-next-line react/prop-types
    getOneAnime(props.match.params.id).then(r => {
      setAnime(r.data)
    })
  }, [])

  return (
    <div>
      <Link to='/'> return anime</Link>
      <AnimeDetails
        title={anime.title}
        episode={anime.episodes}
        description={anime.synopsis}
        src={anime.image_url}
      />
    </div>
  )
}

export default Anime
