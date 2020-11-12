import React, { useState, useEffect } from 'react'
import { getOneManga } from '../services/mangaServices'
import { Link } from 'react-router-dom'
import AnimeDetails from '../components/AnimeDetails'

const Manga = props => {
  const [manga, setManga] = useState('')
  console.log(manga)
  useEffect(() => {
    // eslint-disable-next-line react/prop-types
    getOneManga(props.match.params.id).then(r => {
      console.log(r.data)
      setManga(r.data)
    })
  }, [])
  return (
    <div>
      <Link to='/'> return anime</Link>
      <AnimeDetails
        title={manga.title}
        episode={0}
        description={manga.synopsis}
        src={manga.image_url}
      />
    </div>
  )
}

export default Manga
