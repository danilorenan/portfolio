import styled from 'styled-components';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export const PortfolioContainer = styled.div`
    min-height: 35rem;
    background-color: var(--dark-secondary);
    color: #fff;
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    overflow: hidden;
    
    @media (max-width: 390px) {
        padding: 0 0 2rem 0;
    }
`
export const PortfolioTitle = styled.h1`
    text-align: center;
    margin: 5rem 0 2rem 0;

    @media (max-width: 800px){
        margin-bottom: 0;
    }
`
export const PortfolioCarouselContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 55rem;
    height: 25rem;
    opacity: 0;
    animation: slide .3s ease-in forwards;
    transition: opacity .3s;
    position: relative;

    @media (max-width: 880px){
        width: 50rem;
    }

    @media (max-width: 800px){
        height: 30rem;
        width: 30rem;
    }
    @media (max-width: 500px){
        padding: 0 5rem 0 4.6rem;
    }

    @keyframes slide {
        to {
            opacity: 1;
        }
    }

    .carousel-item {
        display: flex;
        justify-content: space-between;
        align-items: center;

        @media (max-width: 800px){
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
        @media (max-width: 500px){
        margin-right: 0.8rem;
    }

        @media (max-width: 406px){
            width: 20rem;
        }
        
    }

    .back {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 10rem;
        width: 7rem;
        cursor: pointer;
        @media (max-width: 500px) {
            width: 2rem;
        }
        @media (max-width: 390px){
            height: 3rem;
            margin-top: 15rem;
            position: absolute;
            left: 15%;

        }
        @media (max-width: 320px) {
            left: 16%;
        }
        
    }
    .forward {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 10rem;
        width: 7rem;
        cursor: pointer;
        
        @media (max-width: 500px) {
            width: 2rem;
        }
        @media (max-width: 390px){
            height: 3rem;
            margin-top: 15rem;
            right: 15%;
            position: absolute;
        }
        @media (max-width: 320px) {
            right: 16%;
        }
        
    }
`
export const IconBack = styled(ArrowBackIosNewIcon)`

`
export const IconForward = styled(ArrowForwardIosIcon)`

`
export const ImagesContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20rem;
    height: 25rem;
    margin-left: 1rem;
    position: relative;
    @media (max-width: 800px){
        height: 18rem;
    }
    @media (max-width: 320px) {
            padding: 0 .2rem 0 .2rem;
    }

    /* @media (max-width: 390px){
        width: 18rem;
        height: 16rem;
    } */
    .mobile {
        height: 15rem;
        width: 7.5rem;
        border-radius: 6px;
        
        /* @media (max-width: 390px){
        position: absolute;
        top: 0;
        display: none;
        } */
    }
    .images-web {
        display: flex;
        height: 15rem;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        margin-left: .5rem;

        /* @media (max-width: 390px){
            display: block;
        } */
    }
    .web-one {
        border-radius: 6px;
        /* @media (max-width: 390px){
            width: 70%;
            float: right;
        } */
    }
    .web-two {
        border-radius: 6px;
        /* @media (max-width: 390px){
            width: 70%;
        } */
    }
    
`
export const CarouselInfos = styled.div`
    display: flex;
    height: 100%;
    width: 20rem;
    flex-direction: column;

    @media (max-width: 880px) {
        margin-left: 1rem;
    }
    @media (max-width: 390px){
        width: 15rem;
    }
`
export const CarouselInfosTitle = styled.h3`
    font-size: 1.6rem;
`
export const CarouselInfosAbout = styled.span`
    font-size: 1rem;
    margin: 1rem 0 1rem 0;
`
export const CarouselButton = styled.button`
    width: 6rem;
    height: 2.5rem;
    background-color: var(--primary);
    border: none;
    cursor: pointer;
    color: #fff;
    font-size: 1rem;
`
