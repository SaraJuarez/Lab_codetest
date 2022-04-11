import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StyledMovieCard } from "../Styles/MovieCard.styled";
import Button from "../Atoms/Button";
import { saveMyList } from "../../redux/features/myList";
import Select from "../Atoms/Select";

function MovieRate(props) {
    const { movieId, handleModalClose } = props;

    const [movieGrade, setMovieGrade] = useState();
    const [alreadyPresent, setAlreadyPresent] = useState(false);
    const [previousGrade, setPreviousGrade] = useState();

    const dispatch = useDispatch();

    const alreadyInMyList = useSelector((state) => state.myList);
    const allMovies = useSelector((state) => state.movies);
    let selectedMovieInfo = allMovies.find((element) => element.id === movieId);

    function saveMovieGrade(e) {
        isAlreadyInList();
        setMovieGrade(e.target.value);
    }

    function isAlreadyInList() {
        let isInMyList = alreadyInMyList.find(element => element.id === movieId)
        if (isInMyList !== undefined) {
            setAlreadyPresent(true)
            setPreviousGrade(isInMyList.myGrade)
        }
    }

    function saveOnMyList() {
        handleModalClose();
        let newObject = {
            ...selectedMovieInfo,
        };
        newObject.myGrade = movieGrade;
        let newArrayList = alreadyInMyList.slice();
        if (alreadyPresent === true) {
            let movieIndex = alreadyInMyList.findIndex((element) => element.id === selectedMovieInfo.id);
            newArrayList[movieIndex] = newObject;
        } else {
            newArrayList.push(newObject);
        }
        dispatch(saveMyList(newArrayList));
    }

    return (
        <div>
            <p>{alreadyPresent === true ? '¿Quieres cambiar tu voto?' : 'Vota la película y guárdala en tu colección'}</p>
            {alreadyPresent === true && <p>Tu voto anterior:{previousGrade} </p>}
            <StyledMovieCard>
                <img
                    alt=""
                    src={`https://image.tmdb.org/t/p/original/${selectedMovieInfo.poster_path}`}
                />
                <h2>{selectedMovieInfo.title}</h2>
            </StyledMovieCard>
            <div>
                <Select onChange={saveMovieGrade} />
            </div>
            {movieGrade !== undefined && (
                <>
                    <p>Tu nota: {movieGrade}</p>
                    <Button onClick={saveOnMyList} title={alreadyPresent === true ? 'Guardar nuevo voto' : 'Guardar'} />
                </>
            )}
        </div>
    );
}

export default MovieRate;
