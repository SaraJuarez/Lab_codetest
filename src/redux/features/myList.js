import { createSlice } from "@reduxjs/toolkit";

export const myListSlice = createSlice({
    name: 'myList',
    initialState: [],
    reducers: {
        saveMyList: (state, action) => {
            return action.payload
        }
    },
    /*     actions: {
            addMovies:(state, act) => ({...state, count: state.count + 1 }),
            DECREMENT: (state, act) => ({...state, count: state.count - 1 })
            
        } */

})

export const { saveMyList } = myListSlice.actions;

export default myListSlice.reducer;