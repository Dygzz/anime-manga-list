import React, { useState, useEffect } from 'react'
import { getOneManga } from '../services/mangaServices'
import Details from '../components/Details'

const Manga = props => {
  const [manga, setManga] = useState('')
  useEffect(() => {
    // eslint-disable-next-line react/prop-types
    getOneManga(props.match.params.id).then(r => {
      console.log(r.data)
      setManga(r.data)
    })
  }, [])
  return (
    <Details
      title={manga.title}
      descriptionSpan={
        manga.volumes !== null
          ? 'Nombre de Volumes: ' + manga.volumes
          : 'Nombre de volume inconnu'
      }
      description={manga.synopsis}
      src={manga.image_url}
    />
  )
}

export default Manga
