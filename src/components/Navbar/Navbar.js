import React, {useState} from 'react'
import { MenuContainer, 
    MenuIcon, 
    NameContainer, 
    NavbarContainer,
    IconAbout,
    IconContact,
    IconHome,
    IconPortfolio,
    IconService,
    IconSkill } from './styles';
import { Link } from 'react-scroll';

const Navbar = () => {
    const [visible, setVisible] = useState(false);
    const [sidebar, toggleSidebar] = useState(false);

    const handleToggleSideBar = () => toggleSidebar(value => !value)

    const toggleVisible = () => {
      const scrolled = document.documentElement.scrollTop;

      if (scrolled > 100){
        setVisible(true)
      }else{
        setVisible(false)
      }
    }
    window.addEventListener('scroll', toggleVisible)
    return (
        <NavbarContainer className={visible ? 'active' : 'navbar'}>
            <NameContainer>
                Danilo
            </NameContainer>
            <MenuContainer>
                <ul className={sidebar? 'sidebar open' : 'sidebar'}>
                    <Link duration='1200' smooth='true' className='link' to='banner'>
                        <li>Home</li>
                        {sidebar ? <IconHome /> : <div></div>}
                        
                    </Link>
                    <Link duration='1200' smooth='true' className='link' to='portfolio'>
                        <li>Portfolio</li>
                        {sidebar ? <IconPortfolio /> : <div></div>}
                    </Link>
                    <Link duration='1200' smooth='true' className='link' to='services'>
                        <li>Serviços</li>
                        {sidebar ? <IconService /> : <div></div>}
                    </Link>
                    <Link duration='1200' smooth='true' className='link' to='about'>
                        <li>Sobre</li>
                        {sidebar ? <IconAbout /> : <div></div>}
                    </Link>
                    <Link duration='1200' smooth='true' className='link' to='skills'>
                        <li>Skills</li>
                        {sidebar ? <IconSkill /> : <div></div>}
                    </Link>
                    <Link duration='1200' smooth='true' className='link' to='contact'>
                        <li>Contato</li>
                        {sidebar ? <IconContact /> : <div></div>}
                    </Link>
                </ul>
            </MenuContainer>
            <div className='menu'>
                <MenuIcon className={sidebar ? 'menu-active' : 'menu-disable'} onClick={() => handleToggleSideBar()}></MenuIcon>
            </div>
        </NavbarContainer>
    )
}

export default Navbar
