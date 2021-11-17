import styled from 'styled-components';
import DownloadIcon from '@mui/icons-material/Download';

export const AboutContainer = styled.div`
    height: 35rem;
    width: 100%;
    background-color: var(--dark-secondary);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: hidden;

    @media (max-width: 528px) {
        height: 45rem;
    }
`
export const AboutTitle = styled.h1`
    color: #fff;
    text-align: center;
    margin-top: 5rem;

    @media (max-width: 528px) {
        display: none;
    }
`
export const AboutInfosContainer = styled.div`
    width: 50rem;
    height: 25rem;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 1rem 0 1rem;

    @media (max-width: 800px) {
        width: 100%;
    }
    @media (max-width: 528px) {
        flex-direction: column;
    }
`
export const ImageContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 800px) {
        width: 12rem;
        margin: 1rem;
    }
`
export const ImageAbout = styled.img`
    height: 16rem;
    width: 12rem;
    border-radius: 10px;

`
export const AboutInfos = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    @media (max-width: 800px) {
        width: 25rem;
    }

    @media (max-width: 528px) {
        width: 20rem;
    }
    @media (max-width: 340px) {
        width: 18rem;
    }

    span {
        color: #fff;
    }
`
export const AboutExpContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 2rem;
`
export const AboutExpYear = styled.h2`
    color: #fff;
    width: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    span {
        font-weight: 100;
        font-size: 0.8rem;
    }
`
export const AboutInfosButton = styled.div`
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--primary);
    width: 7rem;
    height: 3rem;
    color: #fff;
    text-align: center;
    cursor: pointer;
    border: none;
    border-radius: 6%;
    margin-top: 1rem;
    font-size: 1.1rem;
    :hover{
        background-color: var(--soft);
    }
`
export const IconDownload = styled(DownloadIcon)`

`

