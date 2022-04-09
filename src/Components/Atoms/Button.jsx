import {StyledButton} from '../Styles/Button.styled';


function Button (props) {

    const {title} = props;
    return(
        <StyledButton>
            <p>{title}</p>
        </StyledButton>
    )
}

export default Button;