const getSortedFavorites = (favorites, filterType, isFilterIncrease) => {
  let sortedFavorites = [...favorites];
  if (filterType === 'rating') {
    if (isFilterIncrease) {
      sortedFavorites.sort((fav1, fav2) => fav1.stars - fav2.stars)
    } else {
      sortedFavorites.sort((fav1, fav2) => fav2.stars - fav1.stars)
    }
  } else if (filterType === 'price') {
    if (isFilterIncrease) {
      sortedFavorites.sort((fav1, fav2) => fav1.price - fav2.price)
    } else {
      sortedFavorites.sort((fav1, fav2) => fav2.price - fav1.price)
    }
  }
  return sortedFavorites;
}

export default getSortedFavorites;