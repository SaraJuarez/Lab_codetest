import styled from "styled-components";
import { device } from '../Styles/device';
export const StyledMyList = styled.div`
 background-color: #E5E5E5;

    h1 {
        margin: 0;
        padding: 20px;
        border-radius: 15px;
    }
    @media ${device.laptop} {
        h1 {
            font-size: 28px;
        }
    }

    @media ${device.tablet} { 
        h1 {
            font-size: 20px;
        }
    }
`

export const StyledMyListContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #ffff;

    h2 {
        position: absolute;
        top: 50%;
    }
    
`