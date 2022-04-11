import styled from 'styled-components';

export const StyledLoaderContainer = styled.div`
    display: flex;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    div {
        width: 20px;
        height: 20px;
        background: linear-gradient(91.32deg, #00CCF8 0%, #5530FF 100%);
        border-radius: 50%;
        margin-right: 15px;
    }

    div:last-child {
        margin-right: 0;
    }
`
