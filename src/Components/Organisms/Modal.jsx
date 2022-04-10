import { StyledModal } from '../Styles/Modal.styled';
import { StyledModalSubcontainer } from '../Styles/Modal.styled';
import CloseIcon from '../Atoms/CloseIcon';
function ModalComponent(props) {

    const { handleClose, content } = props;
    return (

        <StyledModal onClick={props.closeFunction} className='modal-container'>
            <StyledModalSubcontainer>
                <CloseIcon onClickFunction={handleClose} />
                {content}

            </StyledModalSubcontainer>
        </StyledModal>
    )
}

export default ModalComponent;