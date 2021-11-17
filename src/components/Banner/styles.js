import styled from "styled-components";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';

export const BannerContainer = styled.div`
    display: flex;
    width: 100%;
    height: 35rem;
    background-color: var(--dark);
    justify-content: center;
    padding: 0 10rem 0 10rem;
    overflow: hidden;
    @media (max-width: 946px){
        padding: 0 7rem 0 7rem;
    }

    @media (max-width: 803px){
        padding: 0 5rem 0 5rem;
    }

    @media (max-width: 675px){
        padding: 0 3rem 0 3rem;
    }
    @media (max-width: 495px){
        padding: 0 1.5rem 0 1.5rem;
    }
`
export const SocialLinkContainer = styled.div`
    width:5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 320px) {
        height: 8rem;
        margin-top: 5rem;
    }
`
export const PerfilContainer = styled.div`
    background-color: var(--dark);
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    width: 100%;
    @media (max-width: 589px){
        flex-direction: column;
    }
`
export const IconsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    height: 8rem;

    @media (max-width: 320px) {
        height: 8rem;
        
    }
`
export const LinkIcon = styled(LinkedInIcon)`
    color: var(--soft);
    cursor: pointer;
    :hover {
        color: var(--primary);
    }
`
export const InstaIcon = styled(InstagramIcon)`
    color: var(--soft);
    cursor: pointer;
    :hover {
        color: var(--primary);
    }
`
export const GitIcon = styled(GitHubIcon)`
    color: var(--soft);
    cursor: pointer;
    :hover {
        color: var(--primary);
    }
`
export const InfosContainer = styled.div`
    display: flex;
    align-items: initial;
    height: 100%;
    padding: 1rem;
    flex-direction: column;
    justify-content: center;
    width: 23rem;
    margin-left: 5rem;
    position: relative;
    
    @media (max-width: 675px){
        margin-left: 2rem;
    }

    @media (max-width: 589px){
        margin-top: 23rem;
        margin-left: 0;
    }
    @media (max-width: 435px){
        margin-left: 2rem;
    }
    @media (max-width: 397px){
        margin-left: 4rem;
    }
    @media (max-width: 372px){
        margin-left: 5.2rem;
    }
    @media (max-width: 320px){
        margin-left: 2rem;
        margin-top: 17rem;
    }
`
export const InfosText = styled.div`
    display: flex;
    color: #fff;
    justify-content: space-around;
    align-items: center;
    display: flex;
    flex-direction: column;
    width: 22rem;
    height: 10rem;

    

    @media (max-width: 763px){
        width: 18rem;
    }
    @media (max-width: 589px){
        width: 17rem;
    }
   
`
export const TitleText = styled.h1`
    color: #fff;
    font-size: 2.3rem;

    @media (max-width: 763px){
        font-size: 2rem;
    }

    @media (max-width: 589px){
        font-size: 1.9rem;
    }
`
export const ContactButton = styled.button`
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

    @media (max-width: 763px){
        font-size: 1rem;
    }

   
    :hover{
        background-color: var(--soft);
    }
`
export const ScrollDownContainer = styled.div`
    width: 10rem;
    height: 3rem;
    margin-top: 3rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;

    .link {
        width: 10rem;
        height: 3rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        cursor: pointer;
    }
`
export const ScrollDownText = styled.span`
    color: var(--soft);
    padding: 0.2rem;
    @media (max-width: 589px){
        display: none;
    }
    
`
export const ScrollDown = styled.div`
    height: 2.5rem;
    width: 1.7rem;
    border: 2px solid var(--soft);
    border-radius: 50px;
    cursor: pointer;
    left: 50%;
    @media (max-width: 589px){
        display: none;
    }
    
    
    ::before,
    ::after {
        content: '';
        position: absolute;
        left: 7.5%;
        top: 72%;
        border: 2px solid var(--soft);
        height: 10px;
        width: 10px;
        transform: translate(-50%, -50%) rotate(45deg);
        border-top: transparent;
        border-left: transparent;
        animation: scroll-down 1s ease-in-out infinite;
        @media (max-width: 763px){
            left: 8.8%;
        }
        @media (max-width: 589px){
        display: none;
        }
    }
    ::after {
        top: 73%;
    }

    @keyframes scroll-down{
        0%{
            opacity: 0;
        }
        30%{
            opacity: 1;
        }
        60%{
            opacity: 1;
        }
        100%{
            opacity: 0;
            top: 76%;
        }
    }
`
export const ProfileContainer = styled.div`
    width: 16rem;
    height: 12rem;

    @media (max-width: 589px){
        position: absolute;
        top: 0;
        height: 8rem;
        width: 12rem;
        margin: 8rem 10rem 0 0;
    }

    @media (max-width: 435px){
        margin-left: 2rem;
    }

    @media (max-width: 397px){
        margin-left: 4rem;
    }
    @media (max-width: 372px){
        margin-left: 5.2rem;
    }
    @media (max-width: 320px){
        margin-left: 6.5rem;
        margin-top: 4rem;
    }

    

    .blob-home {
        height: 100%;
        display: flex;
        
    }
    .blob-profile-img {
        width: 380px;
    }

`
    