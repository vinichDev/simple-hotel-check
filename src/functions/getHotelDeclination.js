const getHotelDeclination = (hotel) => {
  if(hotel % 100 >= 11 && hotel % 100 <= 14) {
    return 'отелей'
  }
  if (hotel % 10 === 1) {
    return 'отель'
  }
  if (hotel % 10 >= 2 && hotel % 10 <= 4) {
    return 'отеля'
  }
  return 'отелей'
}

export default getHotelDeclination;