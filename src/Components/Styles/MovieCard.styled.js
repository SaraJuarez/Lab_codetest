import styled from 'styled-components';
import { device } from './device';

export const StyledMovieCard = styled.div`
   background-color: #FFFFFF;
   padding: 15px;
   border-radius: 15px;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: space-between;

   img {
       width: 150px;
       height: 200px;
       border-radius: 15px;
    }
 
    @media ${device.laptop} {
        img {
            width: 100px;
            height: 150px;
        }
    }

    @media ${device.tablet} { 
        img {
            width: 80px;
            height: 100px;
        }
    } 
`

export const StyledDescription = styled.div`
    width: 250px;
    overflow-x: scroll;
    max-height: 200px;

    span {
        font-weight: bold;
        color: black;
    }

    @media ${device.mobileM} {
        font-size: 12px;
        width: auto;
    }
`

export const StyledCardFooter = styled.div`
    padding-top: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    grid-area: 3/1/4/1;
    width: 100%;

`

export const StyledCardLook = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 60% 10% 30%;
    min-width: 250px;
    display: flex;
    flex-direction: column;
    align-items: center;

    h2 {
        grid-area: 2/1/3/1;
    }

    @media ${device.mobileM} {
        min-width: 150px;

        h2 {
            font-size: 20px;
        }
    }
`

export const StyledCardImage = styled.img`
    grid-area: 1/1/2/1;
`