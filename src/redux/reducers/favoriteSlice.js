import {createSlice} from "@reduxjs/toolkit";

const initialState = {favorites: []}


export const favoriteSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addToFavorites(state, action) {
      state.favorites.push(action.payload)
    },
    removeFromFavorites(state, action) {
      state.favorites = state.favorites.filter(fav => fav.id !== action.payload)
    }
  }
})

export const {addToFavorites, removeFromFavorites} = favoriteSlice.actions;

export default favoriteSlice.reducer
