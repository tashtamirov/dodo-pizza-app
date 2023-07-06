import { configureStore } from '@reduxjs/toolkit'
import categoriesSlice from './slices/categoriesSlice'
import cartSlice from './slices/cartSlice'

export const store = configureStore({
    reducer: {
        categoriesSlice,
        cartSlice
    }
})