import React, {useEffect, useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import {saveMovies} from '../redux/features/movies';
import { getAllMovies } from "../Api/Api";
import { StyledHome, StyledMovieContainer } from "../Components/Styles/Home.styled";
import MovieCard from "../Components/Organisms/MovieCard";
import Modal from '../Components/Organisms/Modal';

function Home () {

    const movies = useSelector((state) => state.movies);
    console.log(movies)
    const [moviesList, setMoviesList] = useState([]);
    const dispatch = useDispatch();
    const [modalOpen, setModalOpen] = useState(false);
    const handleModalOpen = () => setModalOpen(true);
    const handleModalClose = () => setModalOpen(false);

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
            <Modal handleClose={handleModalClose} open={modalOpen}/>
            <h1>Home</h1>
            <StyledMovieContainer>
                {moviesList !== [] && 
                moviesList.map((element, index)=>{
                    return(
                        <MovieCard openModal={handleModalOpen} key={index} movie={element}/>
                    )
                })}
            </StyledMovieContainer>
        </StyledHome>
    )
}

export default Home;