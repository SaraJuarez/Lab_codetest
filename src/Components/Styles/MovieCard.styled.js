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
`

export const StyledCardFooter = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    min-width: 250px;

`

export const StyledCardLook = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media ${device.mobileM} {
        h2 {
            font-size: 20px;
        }
    }


`