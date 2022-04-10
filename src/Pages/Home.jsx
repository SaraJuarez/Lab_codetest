import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { saveMovies } from '../redux/features/movies';
import { getAllMovies } from "../Api/Api";
import { StyledHome, StyledMovieContainer } from "../Components/Styles/Home.styled";
import MovieCard from "../Components/Organisms/MovieCard";
import ModalComponent from "../Components/Organisms/Modal";
import MovieRate from "../Components/Molecules/MovieRate";

function Home() {

    const movies = useSelector((state) => state.movies);
    const dispatch = useDispatch();
    console.log(movies, 'HOME')
    const [moviesList, setMoviesList] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);
    const [movieId, setMovieId] = useState();


    function handleModalOpen(movieId) {
        console.log(movieId, 'trololo')
        setMovieId(movieId)
        setModalOpen(true)
    }

    function handleModalClose() {
        setModalOpen(false)
    }

    useEffect(() => {
        saveAllMovies()
    }, [])



    const saveAllMovies = async () => {
        let moviesList = await getAllMovies();
        dispatch(saveMovies(moviesList.results))
        setMoviesList(moviesList.results)
    }

    return (
        <StyledHome>
            {modalOpen && <ModalComponent content={<MovieRate movieId={movieId} />} handleClose={handleModalClose} open={modalOpen} />}
            <h1>Home</h1>
            <StyledMovieContainer>
                {moviesList !== [] &&
                    moviesList.map((element, index) => {
                        return (
                            <MovieCard openModal={handleModalOpen} key={index} movie={element} />
                        )
                    })}
            </StyledMovieContainer>
        </StyledHome>
    )
}

export default Home;