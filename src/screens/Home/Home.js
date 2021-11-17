import React from 'react';
import Banner from '../../components/Banner/Banner';
import About from '../../components/About/About';
import { HomeContainer, ScrollTop, TopIcon } from './styles';
import Skills from '../../components/Skills/Skills';
import { animateScroll as scroll } from 'react-scroll';
import Qualification from '../../components/Qualification/Qualification';
import Services from '../../components/Services/Services';
import Portfolio from '../../components/Portfolio/Portfolio';
import Contact from '../../components/Contact/Contact';
import Footer from '../../components/Footer/Footer';

const Home = ({visible}) => {

    return (
        <HomeContainer>
            {visible ? <ScrollTop onClick={() => scroll.scrollToTop()} style={{display: 'inline'}}><TopIcon/></ScrollTop> : <ScrollTop style={{display: 'none'}}><TopIcon/></ScrollTop>}
            
            <Banner />
            <Portfolio />
            <Services />
            <About />
            <Skills />
            <Qualification />
            <Contact />
            <Footer />
        </HomeContainer>
    )
}

export default Home
