import { configureStore } from '@reduxjs/toolkit';
import moviesReducer from './features/movies';
import myListReducer from './features/myList';

const store = configureStore({
    reducer: {
        movies: moviesReducer,
        myList: myListReducer
    }
})

export default store;