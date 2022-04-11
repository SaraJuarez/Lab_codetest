import styled from "styled-components";
import { device } from "./device";

export const StyledNav = styled.div`
    padding: 20px;
    display: flex;
    justify-content: space-between;

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