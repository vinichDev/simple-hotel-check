import axios from "axios";

const getHotels = async (location, checkIn, checkOut) => {
  return await axios.get('http://engine.hotellook.com/api/v2/cache.json', {
    params: {
      location,
      checkIn,
      checkOut,
      currency: 'rub',
      limit: 20,
    }
  })
}

export default getHotels;