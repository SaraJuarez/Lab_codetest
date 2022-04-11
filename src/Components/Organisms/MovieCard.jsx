import { useState } from 'react';
import { StyledMovieCard, StyledDescription, StyledCardLook, StyledCardImage } from '../Styles/MovieCard.styled';
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
                    <StyledCardImage alt='' src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} />
                    <h2>{movie.title}</h2>
                    <MovieCardFooter movieId={movie.id} flipCard={flipCard} isFlipped={isFlipped} openModal={openModal} />
                </StyledCardLook>
                <div>
                    <StyledDescription>
                        <p><span>Sinopsis: </span>{movie.overview}</p>
                        <p><span>Nota media: </span>{movie.vote_average}</p>
                        <p><span>Fecha de estreno: </span>{movie.release_date}</p>
                    </StyledDescription>
                    <MovieCardFooter movieId={movie.id} flipCard={flipCard} isFlipped={isFlipped} openModal={openModal} />
                </div>
            </ReactCardFlip>
        </StyledMovieCard>
    )
}

export default MovieCard;