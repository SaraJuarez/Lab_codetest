import {StyledModal} from '../Styles/Modal.styled';
import { StyledModalSubcontainer } from '../Styles/Modal.styled';
function ModalComponent (props) {

    const {open, handleClose} = props;

    return(
        <StyledModal onClick={props.closeFunction} className='modal-container'>
            <StyledModalSubcontainer>
             {/*    <div>
                    <img src={}/>
                    {content}
                </div> */}
            </StyledModalSubcontainer>
        </StyledModal>
    )
}

export default ModalComponent;