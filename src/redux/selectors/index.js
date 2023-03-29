import {createSelector} from "@reduxjs/toolkit";

const hotelResultsItems = state => state.hotelReducer;
export const selectHotelsResults = createSelector([hotelResultsItems], (items) => items);


const favoritesItems = state => state.favoriteReducer.favorites;

export const selectFavorites = createSelector([favoritesItems], (items) => items);

