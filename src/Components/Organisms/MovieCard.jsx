import { useState } from 'react';
import { StyledMovieCard, StyledDescription, StyledCardLook } from '../Styles/MovieCard.styled';
import MovieCardFooter from '../Molecules/MovieCardFooter';
import ReactCardFlip from 'react-card-flip';

function MovieCard(props) {

    const { movie, openModal } = props;
    const [isFlipped, setIsFlipped] = useState(false);
    function flipCard() {
        setIsFlipped(!isFlipped)
    }


    return (
        <StyledMovieCard>
            <ReactCardFlip isFlipped={isFlipped} flipDirection='horizontal'>
                <StyledCardLook>
                    <img alt='' src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} />
                    <h2>{movie.title}</h2>
                    <MovieCardFooter movieId={movie.id} flipCard={flipCard} isFlipped={isFlipped} openModal={openModal} />
                </StyledCardLook>
                <div>
                    <StyledDescription>
                        <p>{movie.overview}</p>
                        <p>{movie.vote_average}</p>
                        <p>{movie.release_date}</p>
                    </StyledDescription>
                    <MovieCardFooter movieId={movie.id} flipCard={flipCard} isFlipped={isFlipped} openModal={openModal} />
                </div>
            </ReactCardFlip>
        </StyledMovieCard>
    )
}

export default MovieCard;