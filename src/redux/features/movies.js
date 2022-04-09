import { createSlice } from "@reduxjs/toolkit";

export const moviesSlice = createSlice({
    name: 'movies',
    initialState:  [],
    reducers: {
        saveMovies: (state, action) => {
            state = action.payload
        },
    },
/*     actions: {
        addMovies:(state, act) => ({...state, count: state.count + 1 }),
        DECREMENT: (state, act) => ({...state, count: state.count - 1 })
        
    } */

})

export const {saveMovies} = moviesSlice.actions;

export default moviesSlice.reducer;