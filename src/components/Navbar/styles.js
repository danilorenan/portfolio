import styled from "styled-components";

export const NavbarContainer = styled.div`
    display: flex;
    flex-direction: row;
    background-color: var(--dark);
    width: 100%;
    height: 4rem;
    border-bottom: 2px solid var(--soft);
    color: #fff;
`
export const NameContainer = styled.div`
    display: flex;
    align-items: center;
    width: 35rem;
    justify-content: center;
    font-size: 1.2rem;
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
    }
    li {
        text-decoration: none;
        width: 5rem;
        cursor: pointer;
        :hover{
            color: var(--primary);
        }
    }
`