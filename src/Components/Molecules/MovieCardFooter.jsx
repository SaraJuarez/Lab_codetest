import Button from "../Atoms/Button";
import { StyledCardFooter } from "../Styles/MovieCard.styled";

function MovieCardFooter(props) {
    const { openModal, isFlipped, flipCard, movieId } = props;
    return (
        <StyledCardFooter>
            <Button onClick={() => openModal(movieId)} title='Añadir' />
            <Button onClick={flipCard} title={isFlipped ? 'Volver' : 'Ver más'} />
        </StyledCardFooter>
    )
}

export default MovieCardFooter;