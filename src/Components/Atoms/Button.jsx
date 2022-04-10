import { StyledButton } from '../Styles/Button.styled';


function Button(props) {

    const { title, onClick } = props;
    return (
        <StyledButton onClick={onClick}>
            <p>{title}</p>
        </StyledButton>
    )
}

export default Button;