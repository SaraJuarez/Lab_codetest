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

    div {
        width: 250px;
        overflow: hidden;

    } 

    p {
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        word-wrap: break-word;
        max-width: 300px;
    } 
`