import { StyledMyListCard, StyledMyListImage, StyledMyListDetails, StyledMyListNumber } from '../Styles/MyListCard.styled';

function MyListCard(props) {
    const { movie } = props;

    return (
        <StyledMyListCard>
            <StyledMyListImage alt='' src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} />
            <StyledMyListDetails>
                <p>{movie.title}</p>
                <p>{movie.overview}</p>
            </StyledMyListDetails>
            <StyledMyListNumber>{movie.myGrade}</StyledMyListNumber>
        </StyledMyListCard>
    )
}

export default MyListCard;