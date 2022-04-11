import styled from "styled-components";
import { device } from './device';

export const StyledMyListCard = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background-color: #FFFFFF;
    border-radius: 15px;
    margin: 20px;
    padding: 20px;
    min-width: 80%;
    box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0,0,0,0);

    @media ${device.mobileM} {
        min-width: 0;
        justify-content: space-between;
    }

`

export const StyledMyListImage = styled.img`
    width: 200px;
    border-radius: 15px;
    box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0,0,0,0);

    @media ${device.laptop} {
        width: 150px;
    }

    @media ${device.tablet} { 
        width: 100px;
    }

    @media ${device.mobileM} {
        width: 60px;
    }
`

export const StyledMyListDetails = styled.div`
    width: 250px;
    overflow-x: hidden;


    @media ${device.tablet} { 
        font-size: 12px;
    }

    @media ${device.mobileM} {
        font-size: 10px;
        width: auto;
        margin-left: 5px;
        margin-right: 5px;
    }
`

export const StyledMyListNumber = styled.div`
    font-size: 50px;
    background: linear-gradient(91.32deg, #00CCF8 0%, #5530FF 100%);
    padding: 20px 35px;
    border-radius: 50px;
    box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0,0,0,0);

    @media ${device.laptop} {
        font-size: 35px;
        padding: 10px 20px;
    }

    @media ${device.tablet} { 
        font-size: 20px;
        padding: 5px 10px;
    }

    @media ${device.mobileM} {
        font-size: 16px;
    }
    
`