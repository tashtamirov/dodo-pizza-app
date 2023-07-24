import { calcTotalPrice } from "../../utils/calcTotalPrice.js"
import { getCartFromLS } from "../../utils/getCartFromLS"
const { createSlice } = require("@reduxjs/toolkit")

const { items, totalPrice } = getCartFromLS()

const initialState = {
    items: items,
    totalPrice: totalPrice,
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {

        addItem: (state, action) => {
            const findItem = state.items.find((obj) => obj.id === action.payload.id)

            if (findItem) {
                findItem.count++
            } else {
                state.items.push({
                    ...action.payload,
                    count: 1
                })
            }
            state.totalPrice = calcTotalPrice(state.items)
        }, 

        minusItem: (state, action) => {
            const findItem = state.items.find((item) => item.id === action.payload)
            if (findItem && findItem.count > 1) {
                findItem.count--
                state.totalPrice -= findItem.price
                state.items = state.items.filter((item) => item.count !== 0)
            } 
            
        },

        removeItem: (state, action) => {
            state.items = state.items.filter((item) => item.id !== action.payload)
        },

        clearCart: (state) => {
            state.items = []
            state.totalPrice = 0
        }
    }

})

export const cartSelector = (state) => state.cartSlice

export const { addItem, minusItem, removeItem, clearCart } = cartSlice.actions

export default cartSlice.reducer


