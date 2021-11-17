import React, {useState} from 'react'
import { CarouselButton, CarouselInfos, CarouselInfosAbout, CarouselInfosTitle, IconBack, IconForward, ImagesContainer, PortfolioCarouselContainer, PortfolioContainer, PortfolioTitle } from './styles';
import MobileSetembro from '../../assets/portfolio/mobile-2-de-setembro.jpg';
import WebSetembroOne from '../../assets/portfolio/web-2-de-setembro-1.JPG';
import WebSetembroTwo from '../../assets/portfolio/web-2-de-setembro-2.JPG';
import MobileNeed from '../../assets/portfolio/mobile-need.jpg';
import WebNeedOne from '../../assets/portfolio/web-need-1.JPG';
import WebNeedTwo from '../../assets/portfolio/web-need-2.JPG';

const Portfolio = () => {
    const [carousel, setCarousel] = useState(true);

    const toggleCarousel = () => {
        if (carousel === true) {
            setCarousel(false)
        }else{
            setCarousel(true)
        }
    }

    return (
        <PortfolioContainer id='portfolio' name='portfolio'>
            <PortfolioTitle>Portfolio</PortfolioTitle>
            <PortfolioCarouselContainer>
                <div className='back' onClick={() => toggleCarousel()}>
                    <IconBack fontSize='large'/>
                </div>
                {carousel ?  <div className='carousel-item'>
                    <ImagesContainer>
                       <img alt='mobile' className='mobile' src={MobileSetembro} />
                       <div className='images-web'>
                           <img src={WebSetembroOne} alt='web' className='web-one'/>
                           <img src={WebSetembroTwo} alt='web' className='web-two' />
                       </div> 
                    </ImagesContainer>
                    <CarouselInfos>
                        <CarouselInfosTitle>Padaria 2 de Setembro</CarouselInfosTitle>
                        <CarouselInfosAbout>Website responsivo, com animações interativas. Área admin, com backend em NodeJS e armazenamento em nuvem via AWS.</CarouselInfosAbout>
                        <CarouselButton>Visite</CarouselButton>
                    </CarouselInfos>
                </div> : <div className='carousel-item'>
                    <ImagesContainer>
                       <img alt='mobile' className='mobile' src={MobileNeed} />
                       <div className='images-web'>
                           <img src={WebNeedOne} alt='web' className='web-one'/>
                           <img src={WebNeedTwo} alt='web' className='web-two' />
                       </div> 
                    </ImagesContainer>
                    <CarouselInfos>
                        <CarouselInfosTitle>Need Panfletagem</CarouselInfosTitle>
                        <CarouselInfosAbout>Website responsivo, com animações interativas. Área admin, com backend em NodeJS e armazenamento em nuvem via AWS.</CarouselInfosAbout>
                        <CarouselButton>Visite</CarouselButton>
                    </CarouselInfos>
                </div>}
               
                <div className='forward' onClick={() => toggleCarousel()}>
                    <IconForward fontSize='large' />
                </div>
            </PortfolioCarouselContainer>
        </PortfolioContainer>
    )
}

export default Portfolio;
