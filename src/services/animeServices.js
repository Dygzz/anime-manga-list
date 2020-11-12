import axios from 'axios'

const getAnimeList = () => axios.get('https://api.jikan.moe/v3/top/anime')

const getOneAnime = id => axios.get(`https://api.jikan.moe/v3/anime/${id}`)

export { getAnimeList, getOneAnime }
