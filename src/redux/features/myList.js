import { createSlice } from "@reduxjs/toolkit";

export const myListSlice = createSlice({
    name: 'myList',
    initialState: [],
    reducers: {
        saveMyList: (state, action) => {
            return action.payload
        }
    },
})

export const { saveMyList } = myListSlice.actions;

export default myListSlice.reducer;