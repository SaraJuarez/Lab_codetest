import { useState } from "react";
import { StyledSelect } from "../Styles/MovieRate.styled";
import { useDispatch, useSelector } from "react-redux";
import { StyledMovieCard } from "../Styles/MovieCard.styled";
import Button from "../Atoms/Button";
import { saveMyList } from "../../redux/features/myList";

function MovieRate(props) {
    const { movieId, handleModalClose } = props;

    const [movieGrade, setMovieGrade] = useState();

    const dispatch = useDispatch();
    const alreadyInMyList = useSelector((state) => state.myList);

    let values = Array.from(Array(11).keys());
    const allMovies = useSelector((state) => state.movies);
    let selecteMovieInfo = allMovies.find((element) => element.id === movieId);

    function saveMovieGrade(e) {
        setMovieGrade(e.target.value);
    }

    function saveOnMyList() {
        handleModalClose();
        let newObject = {
            ...selecteMovieInfo,
        };
        newObject.myGrade = movieGrade;
        let newArrayList = alreadyInMyList.slice();
        newArrayList.push(newObject);
        dispatch(saveMyList(newArrayList));
    }

    return (
        <div>
            <p>Vota la película y guárdala en tu colección</p>
            <StyledMovieCard>
                <img
                    alt=""
                    src={`https://image.tmdb.org/t/p/original/${selecteMovieInfo.poster_path}`}
                />
                <h2>{selecteMovieInfo.title}</h2>
            </StyledMovieCard>
            <div>
                <StyledSelect onChange={saveMovieGrade}>
                    <option value="" hidden>
                        Vota
                    </option>
                    {values.map((element, index) => {
                        return (
                            <option key={index} value={element}>
                                {element}
                            </option>
                        );
                    })}
                </StyledSelect>
            </div>
            {movieGrade !== undefined && (
                <>
                    <p>Tu nota: {movieGrade}</p>
                    <Button onClick={saveOnMyList} title="Guardar" />
                </>
            )}
        </div>
    );
}

export default MovieRate;
