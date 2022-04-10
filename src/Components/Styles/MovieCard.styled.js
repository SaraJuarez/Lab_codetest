import styled from 'styled-components';


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
`

export const StyledDescription = styled.div`
    width: 250px;
    overflow-x: scroll;
`

export const StyledCardFooter = styled.div`
/*     position: absolute; 
    bottom: -30px; */
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
`