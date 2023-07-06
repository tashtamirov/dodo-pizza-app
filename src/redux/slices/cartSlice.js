const { createSlice } = require("@reduxjs/toolkit")

const initialState = {
    items: [],
    totalPrice: 0
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
            state.totalPrice = state.items.reduce((sum, obj) => {
                return obj.price + sum
            }, 0)
        },

        removeItem: (state, action) => {
            state.items.filter((item) => item.id !== action.payload)
        },

        clearCart: (state) => {
            state.items = []
        }
    }

})

export const { addItem, removeItem, clearCart } = cartSlice.actions

export default cartSlice.reducer