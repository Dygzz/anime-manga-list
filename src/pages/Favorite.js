import React, { useState, useEffect } from 'react'
import ChooseList from '../components/ChooseList'
import List from '../components/List'

const Favorite = () => {
  const [listFavorite, setListFavorite] = useState([])
  const [isAnime, setIsAnime] = useState(true)

  useEffect(() => {
    let type = isAnime ? 'anime' : 'manga'
    setListFavorite(JSON.parse(localStorage.getItem('favorite' + type)))
  }, [])

  const handleChange = isManga => {
    if (isManga) {
      setIsAnime(false)
      setListFavorite(JSON.parse(localStorage.getItem('favoritemanga')))
    } else {
      setIsAnime(true)
      setListFavorite(JSON.parse(localStorage.getItem('favoriteanime')))
    }
  }
  return (
    <div>
      <ChooseList
        funcOne={() => handleChange(false)}
        funcTwo={() => handleChange(true)}
        textOne='Anime'
        textTwo='Mangas'
      />
      <List myList={listFavorite} type={isAnime ? 'anime' : 'manga'} />
    </div>
  )
}

export default Favorite
