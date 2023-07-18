import { combineReducers } from "@reduxjs/toolkit";
import filterSlice from './slices/filterSlice';
import pizzaSlice from './slices/pizzaSlice';
import cartSlice from './slices/cartSlice'

const rootReducer = combineReducers({
    filterSlice,
    pizzaSlice,
    cartSlice
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer