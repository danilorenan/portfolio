import React from 'react'
import { BannerContainer, 
    PerfilContainer, 
    SocialLinkContainer, 
    LinkIcon, 
    IconsContainer,
    GitIcon,
    InstaIcon, 
    InfosText,
    TitleText,
    ProfileContainer,
    InfosContainer,
    ContactButton,
    ScrollDown,
    ScrollDownContainer,
    ScrollDownText} from './styles'
import { Link } from 'react-scroll';
import BlobProfile from '../../assets/blob.jpeg';

const Banner = () => {
    return (
        <BannerContainer name='banner' id='banner'>
            <SocialLinkContainer>
                <IconsContainer>
                    <a href='https://www.linkedin.com/in/danilo-renan/'><LinkIcon/></a>
                    <a href='https://www.instagram.com/danilorennan/'><InstaIcon /></a>
                    <a href='https://github.com/danilorenan'><GitIcon /></a>
                </IconsContainer>
            </SocialLinkContainer>
            <PerfilContainer>
                <InfosContainer>
                    <InfosText>
                        <TitleText>Olá, me chamo Danilo</TitleText>
                        <h3>FullStack Web Developer</h3>
                        <span>Alta experiência em web design, produzindo o que há de melhor em experiência de usuário.</span>
                    </InfosText>
                    <ContactButton>Contate-me</ContactButton>
                    <ScrollDownContainer>
                        <Link  duration='1200' smooth='true' className='link' to='portfolio'>
                            <ScrollDown></ScrollDown>
                            <ScrollDownText>Scroll Down</ScrollDownText>
                        </Link>                       
                    </ScrollDownContainer>
                </InfosContainer>                
                <ProfileContainer>
                        {/* <svg
                            width='130'
                            height='130'
                            viewBox='0 0 1000 1000'
                            xmlns='http://www.w3.org/2000/svg'
                            className='blob-home'
                        >
                            <defs>
                                <clipPath id='shape'>
                                    <path fill='currentColor' d='M676,734Q500,968,331.5,734Q163,500,331.5,414Q500,328,676,414Q852,500,676,734Z'></path>
                                </clipPath>
                            </defs>
                            <g clip-path='url(#shape)'>
                                <path fill='#dd751e' d='M676,734Q500,968,331.5,734Q163,500,331.5,414Q500,328,676,414Q852,500,676,734Z' />
                                <image height='100%' width='100%' x='350' y='120' className='blob-profile-img' href={ProfileImg} />
                            </g>
                        </svg> */}
                        <img src={BlobProfile} alt='blob-profile' />
                </ProfileContainer>
            </PerfilContainer>
        </BannerContainer>
    )
}

export default Banner;
