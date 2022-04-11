import { createSlice } from "@reduxjs/toolkit";

export const moviesSlice = createSlice({
    name: 'movies',
    initialState: [],
    reducers: {
        saveMovies: (state, action) => {
            return action.payload
        },
    },
})

export const { saveMovies } = moviesSlice.actions;

export default moviesSlice.reducer;