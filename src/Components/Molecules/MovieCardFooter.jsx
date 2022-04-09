import Button from "../Atoms/Button";

function MovieCardFooter(props) {
    const {openModal} = props;
    return(
        <div>
            <Button onClick={openModal} title='Añadir'/>
        </div>
    )
}

export default MovieCardFooter;