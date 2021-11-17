import styled from "styled-components";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

export const HomeContainer = styled.div`
    width: 100%;
    position: relative;
`
export const ScrollTop = styled.div`
    z-index: 9999;
    width: 2rem;
    height: 2rem;
    position: fixed;
    background-color: var(--primary);
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    right: 0;
    bottom: 0;
    margin: 2rem;
    border-radius: 10px;
    text-align: center;
    :hover {
        background-color: var(--soft);
        cursor: pointer;
    }

    @media (max-width: 570px) {
        bottom: 5%;
    }
`
export const TopIcon = styled(ArrowUpwardIcon)`
    align-self: center;
    justify-self: center;
    margin-top: 0.2rem;
`