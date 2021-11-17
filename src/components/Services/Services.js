import React from 'react'
import { IconBack, IconFront, IconUi, ItemContent, ItemsContainer, ServicesContainer, ServicesTitle } from './styles'


const Services = () => {

    return (
        <ServicesContainer name='services' id='services'>
            <ServicesTitle>Serviços</ServicesTitle>
            <ItemsContainer>
                <ItemContent>
                    <IconUi fontSize='inherit' />
                    <h3>UI/UX <br/> Designer</h3>
                    <span>Veja mais -></span>
                </ItemContent>
                <ItemContent>
                    <IconFront fontSize='inherit' />
                    <h3>FrontEnd <br/> Developer</h3>
                    <span>Veja mais -></span>
                </ItemContent>
                <ItemContent>
                    <IconBack fontSize='inherit' />
                    <h3>BackEnd <br/> Developer</h3>
                    <span>Veja mais -></span>
                </ItemContent>
            </ItemsContainer>
        </ServicesContainer>
    )
}

export default Services
