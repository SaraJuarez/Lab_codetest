import { useState } from 'react';
import { StyledSelect } from '../Styles/MovieRate.styled';
import { useSelector } from 'react-redux';
import { StyledMovieCard } from '../Styles/MovieCard.styled';


function MovieRate(props) {

    const { movieId } = props;
    const [movieGrade, setMovieGrade] = useState();
    let values = Array.from(Array(11).keys())
    const allMovies = useSelector((state) => state.movies);
    let selecteMovieInfo = allMovies.find(element => element.id === movieId)

    function saveMovieGrade(e) {
        setMovieGrade(e.target.value)
    }

    return (
        <div>
            <p>Vota la película y guárdala en tu colección</p>
            <StyledMovieCard>
                <img alt='' src={`https://image.tmdb.org/t/p/original/${selecteMovieInfo.poster_path}`} />
                <h2>{selecteMovieInfo.title}</h2>
            </StyledMovieCard>
            <div>
                <StyledSelect onChange={saveMovieGrade}>
                    <option value="" hidden>
                        Vota
                    </option>
                    {values.map((element, index) => {
                        return <option key={index} value={element}>{element}</option>
                    })}
                </StyledSelect>
            </div>
            <p>Tu nota: {movieGrade}</p>
        </div>
    )
}

export default MovieRate;