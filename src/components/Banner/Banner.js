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
    BlobContainer} from './styles'
import ProfileImg from '../../assets/profile.jpg';

const Banner = () => {
    return (
        <BannerContainer>
            <SocialLinkContainer>
                <IconsContainer>
                    <LinkIcon />
                    <InstaIcon />
                    <GitIcon />
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
                </InfosContainer>                
                <ProfileContainer>
                        <svg
                            width='1000'
                            height='1000'
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
                        </svg>
                </ProfileContainer>
            </PerfilContainer>
        </BannerContainer>
    )
}

export default Banner;
