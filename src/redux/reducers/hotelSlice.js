import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  isLoading: true,
  hotels: []
}

export const hotelSlice = createSlice({
  name: 'hotels',
  initialState,
  reducers: {
    hotelsFetching(state) {
      state.isLoading = true;
    },
    hotelsFetchingSuccess(state, action) {
      state.isLoading = false;
      state.error = '';
      state.hotels = action.payload.hotels;
      state.checkIn = action.payload.checkIn;
      state.location = action.payload.location;

    },
    hotelsFetchingError(state) {
      state.isLoading = false;
    }
  }
})

export const {hotelsFetching, hotelsFetchingSuccess, hotelsFetchingError} = hotelSlice.actions
export default hotelSlice.reducer