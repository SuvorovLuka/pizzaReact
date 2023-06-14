import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    categoryId: 0,
    sort: {
        name: 'популярности',
        sortProperty: 'rating'
    }
}

const fliterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setCategoryId(state, action) {
            state.categoryId = action.payload;
        },
    },
});

export const { setCategoryId } = fliterSlice.actions

export default fliterSlice.reducer