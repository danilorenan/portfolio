import React from 'react';
import { AboutContainer, AboutExpContainer, AboutExpYear, AboutInfos, AboutInfosButton, AboutInfosContainer, AboutTitle, IconDownload, ImageAbout, ImageContainer } from './styles';
import ProfileImg from '../../assets/profile1.jpg';
const About = () => {
    return (
        <AboutContainer id='about' name='about'>
            <AboutTitle>Quem eu sou</AboutTitle>
            <AboutInfosContainer>
                <ImageContainer>
                    <ImageAbout src={ProfileImg} />
                </ImageContainer>
                <AboutInfos>
                    <span>Apaixonado por design e experiência de usuário. Viciado em estudar novas tecnologias e aplicá-las em meus projetos para transformar o meu produto, o mais rápido e acessível que possa ser.</span>
                    <AboutExpContainer>
                        <AboutExpYear>
                            <h3>7+</h3>
                            <span>Anos de experiência</span>
                        </AboutExpYear>
                        <AboutExpYear>
                            <h3>2+</h3>
                            <span>Projetos completos</span>
                        </AboutExpYear>
                        <AboutExpYear>
                            <h3>2+</h3>
                            <span>Empresas trabalhadas</span>
                        </AboutExpYear>
                    </AboutExpContainer>
                    <AboutInfosButton>Baixar CV <IconDownload /></AboutInfosButton>
                </AboutInfos>
            </AboutInfosContainer>
        </AboutContainer>
    )
}

export default About
