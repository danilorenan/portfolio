import styled from "styled-components";
import GridViewIcon from '@mui/icons-material/GridView';
import HomeIcon from '@mui/icons-material/Home';
import CodeIcon from '@mui/icons-material/Code';
import ConstructionIcon from '@mui/icons-material/Construction';
import InfoIcon from '@mui/icons-material/Info';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';



export const NavbarContainer = styled.div`
    display: flex;
    flex-direction: row;
    background-color: var(--dark);
    width: 100%;
    height: 4rem;
    border-bottom: 2px solid var(--soft);
    color: #fff;
    position: fixed;
    z-index: 10000;
    overflow: hidden;

    .menu {
        display: none;
        width: 2rem;

        @media (max-width: 570px) {
            display: block;
            
        }
    }

    @media (max-width: 570px) {
        bottom: 0;
        border-top: 2px solid var(--soft);
        border-bottom: none;
        height: 2.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0 2rem 0 2rem;
    }
`
export const NameContainer = styled.div`
    display: flex;
    align-items: center;
    width: 35rem;
    justify-content: center;
    font-size: 1.2rem;

    @media (max-width: 570px){
        width: 5rem;
    } 
`
export const MenuContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    ul {
        display: flex;
        justify-content: center;
        align-items: center;
        text-decoration: none;
        list-style: none;
        font-size: 1rem;

        @media(max-width: 570px){
        position: absolute;
        bottom: 2.5rem;
        right: 0;
        width: 100%;
        height: 10rem;
        z-index: 1000;
        background-color: var(--dark);
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        padding: 0 2rem 0 2rem;
        transform: translateX(100%);
        transition: all 0.5s ease;
        

        /* @media (max-width: 500px) {
            display: none;
        } */
    }

    &.open{
        @media(max-width: 570px){
            transform: translateX(0);
            position: fixed;
            z-index: 1000;
            transition: all 0.5s ease;
            justify-content: space-around;
            align-items: center;
            font-size: 1rem;
        }
    }

    li {
        text-decoration: none;
        width: 5rem;
        cursor: pointer;
        @media (max-width: 570px){
            flex: 0 0 33.333333%;
        }
        :hover{
            color: var(--primary);
        }
    }
    .link {
        
        text-decoration: none;
        width: 5rem;
        cursor: pointer;
        

        @media (max-width: 570px){
            width: 7rem;
            text-align: center;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            flex: 0 0 33.333333%;

        }
        :hover{
            color: var(--primary);
        }
    }
}
`
export const MenuIcon = styled(GridViewIcon)`
    cursor: pointer;
    align-self: right;
    float: right;
`
export const IconHome = styled(HomeIcon)`
    display: none;
    @media (max-width: 570px){
        display: block;
    }
`
export const IconPortfolio = styled(CodeIcon)`
    display: none;
    @media (max-width: 570px){
        display: block;
    }
`
export const IconService = styled(ConstructionIcon)`
    display: none;
    @media (max-width: 570px){
        display: block;
    }
`
export const IconAbout = styled(InfoIcon)`
    display: none;
    @media (max-width: 570px){
        display: block;
    }
`
export const IconSkill = styled(AutoFixHighIcon)`
    display: none;
    @media (max-width: 570px){
        display: block;
    }
`
export const IconContact = styled(PermContactCalendarIcon)`
    display: none;
    @media (max-width: 570px){
        display: block;
    }
`