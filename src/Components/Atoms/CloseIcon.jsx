import icon from '../../assets/images/closeIcon.webp';
import { StyledIcon } from '../Styles/CloseIcon.style';

function CloseIcon(props) {
    const { onClickFunction } = props;

    return (
        <StyledIcon onClick={onClickFunction} src={icon} />
    )
}

export default CloseIcon;