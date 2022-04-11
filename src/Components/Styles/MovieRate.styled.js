import styled from 'styled-components';
import { device } from './device';

export const StyledMovieRate = styled.div`
    
    h2 {
        text-align: center;
    }

    @media ${device.mobileM} {
        h2 {
            font-size: 16px;
        }
    }
`