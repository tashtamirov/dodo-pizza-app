import axios from 'axios'
const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit")

const initialState = {
    items: [],
    status: 'loading'
}

export const getPizzas = createAsyncThunk(
    'pizzas/fetchPizzasStatus', async (params) => {

        const { currentPage, categoryId, sortType } = params

        const { data } = await axios.get(`https://64932c79428c3d2035d17405.mockapi.io/pizzas?page=${currentPage}&limit=4&${categoryId > 0 ? `category=${categoryId}` : ''}&sortBy=${sortType.sortProperty}&order=desc`)

        return data
    }
)

const pizzaSlice = createSlice({
    name: 'pizza',
    initialState,
    reducers: {

        setItems: (state, action) => {
            state.items = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(getPizzas.pending, (state) => {
            state.status = 'Pending'
        })

        .addCase(getPizzas.fulfilled, (state, action) => {
            state.items = action.payload
            state.status = 'Sucсess'
        })

        .addCase(getPizzas.rejected, (state) => {
            state.status = 'Error'
            state.items = []
        })
    }

})

export const { setItems } = pizzaSlice.actions

export default pizzaSlice.reducer


