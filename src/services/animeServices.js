import axios from 'axios'

const getAnimeList = () => axios.get('https://api.jikan.moe/v3/top/anime')

const getOneAnime = id => axios.get(`https://api.jikan.moe/v3/anime/${id}`)

const getCharactersAnime = id =>
  axios.get(`https://api.jikan.moe/v3/anime/${id}/characters_staff`)

export { getAnimeList, getOneAnime, getCharactersAnime }
