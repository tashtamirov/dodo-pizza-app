const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    categoryId: 0,
    currentPage: 1,
    sort: {
        name: 'популярности',
        sortProperty: 'rating'
    }
}

const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        setCategoryId: (state, action) => {
            state.categoryId = action.payload
        },
        setSort: (state, action) => {
            state.sort = action.payload
        },
        setCurrentPage: (state, action) => {
            state.currentPage = action.payload
        }
    }
})

export const { setCategoryId, setSort, setCurrentPage } = categoriesSlice.actions

export default categoriesSlice.reducer