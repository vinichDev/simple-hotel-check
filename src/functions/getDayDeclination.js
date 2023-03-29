const getDayDeclination = (day) => {
  if(day % 100 >= 11 && day % 100 <= 14) {
    return 'дней'
  }
  if (day % 10 === 1) {
    return 'день'
  }
  if (day % 10 >= 2 && day % 10 <= 4) {
    return 'дня'
  }
  return 'дней'
}

export default getDayDeclination;