import styled from 'styled-components';
import { device } from './device';

export const StyledButton = styled.div`
    background: linear-gradient(91.32deg, #00CCF8 0%, #5530FF 100%);
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    min-width: 80px;

    p {
        color: white;
    }

    @media ${device.mobileM} {
        p {
            font-size: 12px;
        }
    }

`