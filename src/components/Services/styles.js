import styled from 'styled-components';
import DashboardIcon from '@mui/icons-material/Dashboard';
import CodeIcon from '@mui/icons-material/Code';
import SettingsIcon from '@mui/icons-material/Settings';

export const ServicesContainer = styled.div`
    min-height: 35rem;
    width: 100%;
    background-color: var(--dark);
    display: flex;
    align-items: center;
    flex-direction: column;
    overflow: hidden;

    @media (max-width: 508px){
        min-height: 20rem;
    }

    @media (max-width: 468px){
        min-height: 37rem;
    }
`
export const ServicesTitle = styled.h1`
    color: #fff;
    text-align: center;
    margin-top: 5rem;
    margin-bottom: 3rem;

    @media (max-width: 468px){
        margin-bottom: 1rem;
    }
`
export const ItemsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 45rem;
    height: 18rem;

    @media(max-width: 724px){
        width: 25rem;
        height: 16rem;
    }
    @media (max-width: 468px){
        flex-wrap: wrap;
    }
`
export const ItemContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: end;
    padding: 2rem 2rem 3rem 3rem;
    width: 13rem;
    margin: 0 1rem 0 1rem;
    height: 100%;
    background-color: var(--dark-secondary);
    color: #fff;
    font-size: 3rem;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
    cursor: pointer;

    @media(max-width: 622px){
        width: 10rem;
        height: 14rem;
        padding: 2rem 2rem 2rem 1rem;
    }
    @media (max-width: 508px){
        width: 8rem;
        height: 12rem;
    }
    
    @media (max-width: 468px){
        margin-top: 1rem;
    }

    :hover {
        transform: translateY(-10px);
    }

    h3 {
        font-size: 1.5rem;
        margin: .5rem 0 .5rem .4rem;

    }
    span {
        font-size: .8rem;
        margin-left: .4rem;
    }
`
export const IconUi = styled(DashboardIcon)`
`
export const IconFront = styled(CodeIcon)`

`
export const IconBack = styled(SettingsIcon)`

`