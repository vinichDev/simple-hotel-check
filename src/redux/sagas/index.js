import {spawn, takeEvery, call, put} from 'redux-saga/effects'
import {hotelsFetchingError, hotelsFetchingSuccess} from "../reducers/hotelSlice";
import getHotels from "../../api/getHotels";

function* workHotelSaga({payload}) {
  try {
    const {location, checkIn, checkOut, count} = payload;
    const response = yield call(getHotels, location, checkIn, checkOut);
    const result = {
      location,
      checkIn,
      hotels: []
    }
    response.data.forEach(hotel => {
      result.hotels.push({
        id: hotel.hotelId,
        name: hotel.hotelName,
        stars: hotel.stars,
        price: Math.ceil(hotel.priceAvg),
        checkIn: checkIn,
        count: count,
      })
    })
    yield put(hotelsFetchingSuccess(result))
  } catch (e) {
    yield put(hotelsFetchingError());
  }
}

function* watchHotelSaga() {
  yield takeEvery('hotels/hotelsFetching', workHotelSaga)
}

export default function* rootSaga() {
  yield spawn(watchHotelSaga);
}