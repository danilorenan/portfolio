import React from 'react'
import { MenuContainer, 
    NameContainer, 
    NavbarContainer } from './styles'

const Navbar = () => {
    return (
        <NavbarContainer>
            <NameContainer>
                Danilo
            </NameContainer>
            <MenuContainer>
                <ul>
                    <li>
                        <a>Home</a>
                    </li>
                    <li>
                        <a>Sobre</a>
                    </li>
                    <li>
                        <a>Skills</a>
                    </li>
                    <li>
                        <a>Serviços</a>
                    </li>
                    <li>
                        <a>Portfolio</a>
                    </li>
                    <li>
                        <a>Contato</a>
                    </li>
                </ul>
            </MenuContainer>
        </NavbarContainer>
    )
}

export default Navbar
