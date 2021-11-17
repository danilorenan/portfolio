import React, {useState} from 'react'
import { IconDown, IconUp, IconFront, ItemFrontTitle, ItemFrontTitleContainer, SkillItemFront, SkillsContainer, SkillsTitle,
        SkillItemBack, ItemBackTitleContainer, ItemBackTitle, IconBack, IconDesign,
        SkillItemDesign,ItemDesignTitleContainer, ItemDesignTitle, SkillListContainer, SkillListItemContainer, SkillItemInfo, ProgressLine } from './styles'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

const Skills = () => {
    const [openDesign, setOpenDesign] = useState(false);
    const [openFront, setOpenFront] = useState(true);
    const [openBack, setOpenBack] = useState(false);

    const toggleOpenFront = () => {
        if (openFront === true){
            setOpenFront(false)
        }else{
            setOpenFront(true)
        }
    }
    const toggleOpenBack = () => {
        if (openBack === true){
            setOpenBack(false)
        }else{
            setOpenBack(true)
        }
    }
    const toggleOpenDesign = () => {
        if (openDesign === true){
            setOpenDesign(false)
        }else{
            setOpenDesign(true)
        }
    }
    return (
        <SkillsContainer id='skills' name='skills'>
            <SkillsTitle>Minhas Skills</SkillsTitle>
            <Box width='100%'>
            <Grid className='grid' spacing={2} columns={{ xs: 3, sm: 6, md: 12 }} justifyContent='center' container >
                <SkillItemFront>
                    <ItemFrontTitleContainer onClick={() => toggleOpenFront()}>
                        <IconFront />
                        <ItemFrontTitle>
                            <h2>Frontend developer</h2>
                            <span>Mais de 4 anos </span>
                        </ItemFrontTitle>
                        {openFront ? <IconUp /> : <IconDown />}
                    </ItemFrontTitleContainer>
                    <SkillListContainer>
                        {openFront ? <SkillListItemContainer>
                            <SkillItemInfo>
                                <h3>Javascript</h3>
                                <span>90%</span>
                            </SkillItemInfo>
                            <ProgressLine>
                                <span style={{width: '90%'}}></span>
                            </ProgressLine>
                            <SkillItemInfo>
                                <h3>Css</h3>
                                <span>98%</span>
                            </SkillItemInfo>
                            <ProgressLine>
                                <span style={{width: '98%'}}></span>
                            </ProgressLine>
                            <SkillItemInfo>
                                <h3>ReactJS</h3>
                                <span>95%</span>
                            </SkillItemInfo>
                            <ProgressLine>
                                <span style={{width: '95%'}}></span>
                            </ProgressLine>
                            <SkillItemInfo>
                                <h3>HTML</h3>
                                <span>100%</span>
                            </SkillItemInfo>
                            <ProgressLine>
                                <span style={{width: '100%'}}></span>
                            </ProgressLine>
                        </SkillListItemContainer> : <div className='close'></div>}
                    </SkillListContainer>
                </SkillItemFront>
                <SkillItemBack >
                    <ItemBackTitleContainer onClick={() => toggleOpenBack()}>
                        <IconBack />
                        <ItemBackTitle>
                            <h2>Backend developer</h2>
                            <span>Mais de 3 anos </span>
                        </ItemBackTitle>
                        {openBack ? <IconUp /> : <IconDown />}
                    </ItemBackTitleContainer>
                    <SkillListContainer>
                        {openBack ? <SkillListItemContainer>
                            <SkillItemInfo>
                                <h3>NodeJs</h3>
                                <span>80%</span>
                            </SkillItemInfo>
                            <ProgressLine>
                                <span style={{width: '80%'}}></span>
                            </ProgressLine>
                            <SkillItemInfo>
                                <h3>MongoDB</h3>
                                <span>95%</span>
                            </SkillItemInfo>
                            <ProgressLine>
                                <span style={{width: '95%'}}></span>
                            </ProgressLine>
                        </SkillListItemContainer> : <div className='close'></div>}
                    </SkillListContainer>
                </SkillItemBack>
                <SkillItemDesign >
                    <ItemDesignTitleContainer onClick={() => toggleOpenDesign()}>
                        <IconDesign />
                        <ItemDesignTitle>
                            <h2>Graphic design</h2>
                            <span>Mais de 6 anos </span>
                        </ItemDesignTitle>
                        {openDesign ? <IconUp /> : <IconDown />}
                    </ItemDesignTitleContainer>
                    <SkillListContainer>
                        {openDesign ? <SkillListItemContainer>
                            <SkillItemInfo>
                                <h3>Photoshop</h3>
                                <span>98%</span>
                            </SkillItemInfo>
                            <ProgressLine>
                                <span style={{width: '98%'}}></span>
                            </ProgressLine>
                            <SkillItemInfo>
                                <h3>Figma</h3>
                                <span>85%</span>
                            </SkillItemInfo>
                            <ProgressLine>
                                <span style={{width: '85%'}}></span>
                            </ProgressLine>
                        </SkillListItemContainer> : <div></div>}
                    </SkillListContainer>
                </SkillItemDesign>
            </Grid>         
            </Box>
            
        </SkillsContainer>
    )
}

export default Skills;
