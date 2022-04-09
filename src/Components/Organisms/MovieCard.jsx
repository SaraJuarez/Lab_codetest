import { StyledMovieCard} from '../Styles/MovieCard.styled';
import MovieCardFooter from '../Molecules/MovieCardFooter';
function MovieCard (props) {

    const {movie, openModal} = props;
    console.log(props)


    return(
        <StyledMovieCard>
            <img alt='' src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}/>
            <h2>{movie.title}</h2>
            <div>
                <p>{movie.overview}</p>
            </div>
            <MovieCardFooter openModal={openModal}/>
        </StyledMovieCard>
    )
}

export default MovieCard;