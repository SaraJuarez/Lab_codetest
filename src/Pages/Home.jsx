import React, {useEffect, useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import {saveMovies} from '../redux/features/movies';
import { getAllMovies } from "../Api/Api";
import { StyledHome, StyledMovieContainer } from "../Components/Styles/Home.styled";
import MovieCard from "../Components/Organisms/MovieCard";
function Home () {

    const movies = useSelector((state) => state.movies);
    console.log(movies)
    const [moviesList, setMoviesList] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        saveAllMovies()
    }, [])



    const saveAllMovies = async() => {
        let moviesList = await getAllMovies();
        dispatch(saveMovies(moviesList.results)) 
        setMoviesList(moviesList.results)
        debugger
    }

    return(
        <StyledHome>
            <h1>Home</h1>
            <StyledMovieContainer>
                {moviesList !== [] && 
                moviesList.map((element, index)=>{
                    return(
                        <MovieCard key={index} movie={element}/>
                    )
                })}
            </StyledMovieContainer>
        </StyledHome>
    )
}

export default Home;