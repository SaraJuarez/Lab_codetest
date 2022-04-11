import { StyledSelect } from '../Styles/Select.styled';


function Select(props) {

    const { onChange } = props;
    let values = Array.from(Array(11).keys());
    return (
        <StyledSelect onChange={onChange}>
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
    )
}

export default Select;