import styled from 'styled-components';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SettingsInputComponentIcon from '@mui/icons-material/SettingsInputComponent';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import Grid from '@mui/material/Grid';


export const SkillsContainer = styled.div`
    background-color: var(--dark);
    width: 100%;
    min-height: 35rem;
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 2rem;

    .grid {
        padding: 0 1rem 0 1rem;
    }
`
export const SkillsTitle = styled.h1`
    text-align: center;
    margin: 5rem;
`
// export const SkillsItemsContainer = styled(Grid)`
    
//     width: 100%;
//     height: 20rem;
   
//     /* @media (max-width: 751px) {
//         height: 35rem;
//     } */
// `
export const SkillItemFront = styled(Grid)`
    width: 15rem;
   
`
export const ItemFrontTitleContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border: solid 2px var(--soft);
    padding: 0.4rem;
    border-radius: 5px;
`
export const ItemFrontTitle = styled.div`
    text-align: center;
    h2{
        
        font-size: 1.2rem;
    }
    span{
        color: var(--grey);
    }
`
export const IconUp = styled(ExpandLessIcon)`
    
`
export const IconDown = styled(ExpandMoreIcon)`
    
`
export const IconFront = styled(DashboardIcon)`
    
`
export const SkillItemBack = styled(Grid)`
    width: 15rem;
    margin: 0 1rem 0 1rem;

    @media (max-width: 527px){
        margin-top: 1rem;
    }
`
export const ItemBackTitleContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border: solid 2px var(--soft);
    padding: 0.4rem;
    border-radius: 5px;
`
export const ItemBackTitle = styled.div`
    text-align: center;
    h2{
        font-size: 1.2rem;
    }
    span{
        color: var(--grey);
    }
`
export const IconBack = styled(SettingsInputComponentIcon)`
    
`
export const SkillItemDesign = styled(Grid)`
    width: 15rem;

    @media (max-width: 767px){
        margin-top: 1rem;
    }
`
export const ItemDesignTitleContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border: solid 2px var(--soft);
    padding: 0.4rem;
    border-radius: 5px;
`
export const ItemDesignTitle = styled.div`
    text-align: center;
    h2{
        
        font-size: 1.2rem;
    }
    span{
        color: var(--grey);
    }
`
export const IconDesign = styled(DesignServicesIcon)`
    
`
export const SkillListContainer = styled.div`
    box-shadow: 5px 5px 10px rgba(0,0,0,0.2);
    padding: 0 0.3rem 0 2.8rem;
    /* height: 0;
    opacity: 0;
    animation-name: slide;
    animation-duration: .3s;
    animation-timing-function: ease-in;
    animation-fill-mode: forwards;
    @keyframes slide {
        
        to {
            height: auto;
            opacity: 1;
        }
    } */
    `
export const SkillListItemContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-top: 0.5rem;
    opacity: 0;
    animation-name: slide;
    animation-duration: .3s;
    animation-timing-function: ease-in;
    animation-fill-mode: forwards;
    
    @keyframes slide {
        0% {
            opacity: 0;
        }
        50% {
            transform: translateY(0px);
            opacity: .5;
        }
        100% {
            transform: translateY(0px);
            opacity: 1;
        }
        50% {
            transform: translateY(0px);
            opacity: .5;
        }
        0% {
            opacity: 0;
        }
    }
`
export const SkillItemInfo = styled.div`
    display: flex;
    align-items: center;
    padding: 0.4rem;
    h3 {
        font-size: 1rem;
    }
    span{
        width: 2.5rem;
    }
`
export const ProgressLine = styled.div`
    width: 100%;
    height: 0.2rem;
    background-color: var(--grey);
    position: relative;
    box-shadow: inset 0px 1px 1px rgba(0,0,0,0.05),
                      0px 1px rgba(255,255,255,0.8);
    margin: 0 0 1rem 0;
    span{
        height: 0.2rem;
        background-color: var(--primary);
        position: absolute;
    }
`