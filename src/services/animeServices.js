import axios from 'axios'

const getAnimeList = (index = 1) =>
  axios.get(`https://api.jikan.moe/v3/top/anime/${index}`)

const getOneAnime = id => axios.get(`https://api.jikan.moe/v3/anime/${id}`)

const getCharactersAnime = id =>
  axios.get(`https://api.jikan.moe/v3/anime/${id}/characters_staff`)

export { getAnimeList, getOneAnime, getCharactersAnime }
