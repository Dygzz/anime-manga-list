import axios from 'axios'

const getMangaList = (index = 1) =>
  axios.get(`https://api.jikan.moe/v3/top/manga/${index}`)

const getOneManga = id => axios.get(`https://api.jikan.moe/v3/manga/${id}`)

const getCharactersManga = id =>
  axios.get(`https://api.jikan.moe/v3/manga/${id}/characters`)

export { getMangaList, getOneManga, getCharactersManga }
