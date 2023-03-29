import {combineReducers} from '@reduxjs/toolkit'
import hotelReducer from './hotelSlice'
import favoriteReducer from './favoriteSlice'

const rootReducer = combineReducers({
  hotelReducer,
  favoriteReducer,
})

export default rootReducer;

