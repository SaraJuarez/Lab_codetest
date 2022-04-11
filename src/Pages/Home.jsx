import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { saveMovies } from '../redux/features/movies';
import { getAllMovies } from "../Api/Api";
import { StyledHome, StyledMovieContainer } from "../Components/Styles/Home.styled";
import { StyledNav } from "../Components/Styles/Nav.styled";
import MovieCard from "../Components/Organisms/MovieCard";
import ModalComponent from "../Components/Organisms/Modal";
import MovieRate from "../Components/Molecules/MovieRate";
import Button from "../Components/Atoms/Button";
import { Link } from 'react-router-dom';
import Loader from "../Components/Atoms/Loader";

function Home() {

    const dispatch = useDispatch();

    const [moviesList, setMoviesList] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);
    const [movieId, setMovieId] = useState();


    function handleModalOpen(movieId) {
        setMovieId(movieId)
        setModalOpen(true)
    }

    function handleModalClose() {
        setModalOpen(false)
    }

    useEffect(() => {
        setTimeout(saveAllMovies, 3000)
    }, [])



    const saveAllMovies = async () => {
        let moviesList = await getAllMovies();
        dispatch(saveMovies(moviesList.results))
        setMoviesList(moviesList.results)
    }

    return (
        <StyledHome>
            {modalOpen && <ModalComponent content={<MovieRate handleModalClose={handleModalClose} movieId={movieId} />} handleClose={handleModalClose} open={modalOpen} />}
            <StyledNav>
                <h1>Home</h1>
                <Link style={{ textDecoration: 'none' }} to="/myList"><Button title='Mi lista' /></Link>
            </StyledNav>
            <StyledMovieContainer>
                {moviesList.length > 0 ?
                    moviesList.map((element, index) => {
                        return (
                            <MovieCard openModal={handleModalOpen} key={index} movie={element} />
                        )
                    })
                    : <Loader />
                }
            </StyledMovieContainer>
        </StyledHome>
    )
}

export default Home;