import styled from 'styled-components';
import { device } from './device';

export const StyledHome = styled.div`
    background-color: #FFFFFF;
    h1 {
        margin: 0;
    }
`

export const StyledMovieContainer = styled.div`
    height: 100vh;
    background-color: #E5E5E5;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 20px;
    grid-row-gap: 20px;
    padding: 20px;

    @media ${device.laptop} {
        grid-template-columns: repeat(3,1fr);
    }

    @media ${device.tablet} { 
        grid-template-columns: repeat(2, 1fr);

    }
    @media ${device.mobileM} { 
        grid-template-columns: repeat(1, 1fr);

    }

`

