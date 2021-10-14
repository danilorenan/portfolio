import styled from "styled-components";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';

export const BannerContainer = styled.div`
    display: flex;
    width: 100%;
    height: 34rem;
    background-color: var(--dark);
    justify-content: center;
    padding: 0 10rem 0 10rem;
`
export const SocialLinkContainer = styled.div`
    width:5rem;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const PerfilContainer = styled.div`
    background-color: var(--dark);
    display: flex;
    position: relative;
`
export const IconsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    height: 8rem;
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
`
export const TitleText = styled.h1`
    color: #fff;
    font-size: 2.3rem;
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
    :hover{
        background-color: var(--soft);
    }
`
export const ProfileContainer = styled.div`
    width: 30rem;
    height: 28rem;
    z-index: 1000;
    top: 0;
    margin-left: 25rem;
    position: absolute;
    .blob-home {
        height: 100%;
        display: flex;
        
    }
    .blob-profile-img {
        width: 380px;
    }

`
    