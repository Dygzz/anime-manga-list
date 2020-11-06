import axios from 'axios'

const getMangaList = () => axios.get('https://api.jikan.moe/v3/top/manga')

const getOneManga = id => axios.get(`https://api.jikan.moe/v3/manga/${id}`)

export { getMangaList, getOneManga }
