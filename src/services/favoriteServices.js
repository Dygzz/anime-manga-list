const addFavorite = (character, type) => {
  let favorite = localStorage.getItem('favorite' + type)
    ? JSON.parse(localStorage.getItem('favorite' + type))
    : []
  let favoriteExist = favorite.map(e => e.mal_id).indexOf(character.mal_id)
  if (favoriteExist === -1) {
    favorite.push(character)
    localStorage.setItem('favorite' + type, JSON.stringify(favorite))
  }
}

const deleteFavorite = (id, type) => {
  let favorite = localStorage.getItem('favorite' + type)
    ? JSON.parse(localStorage.getItem('favorite' + type))
    : []
  let newFavorite = favorite.filter(item => item.mal_id !== id)
  localStorage.setItem('favorite' + type, JSON.stringify(newFavorite))
}

const favoriteExist = (id, type) => {
  let favorite = localStorage.getItem('favorite' + type)
    ? JSON.parse(localStorage.getItem('favorite' + type))
    : []
  return favorite.map(e => e.mal_id).indexOf(id) !== -1
}

export { addFavorite, deleteFavorite, favoriteExist }
