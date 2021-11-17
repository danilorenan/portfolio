import React, {useState} from 'react';
import { GridTimeline, IconCalendar, IconSchool, IconWork, QualificationContainer, QualificationItemContainer, QualificationTitle, QualificationTitleContainer } from './styles';

const Qualification = () => {
    const [item, setItem] = useState(false);

    return (
        <QualificationContainer>
            <QualificationTitle>
                Qualificação
            </QualificationTitle>
            <QualificationItemContainer>
                <QualificationTitleContainer>
                    <div className='title' onClick={() => setItem(true)}>
                        {item ? <IconSchool style={{color: '#807269'}} /> : <IconSchool /> }
                        {item ? <h3 style={{color: '#807269', textDecoration: 'underline'}}>Educação</h3> : <h3>Educação</h3>}
                    </div>
                    <div className='title' onClick={() => setItem(false)}>
                        {!item ? <IconWork style={{color: '#807269'}} /> : <IconWork /> }
                        {!item ? <h3 style={{color: '#807269', textDecoration: 'underline'}}>Trabalho</h3> : <h3>Trabalho</h3>}
                    </div>
                </QualificationTitleContainer>
            </QualificationItemContainer>
            <GridTimeline>
                {item ? <div className='timeline-school'>
                    <ul>
                        <li>
                            <div className='timeline-content'>
                                <h3>Desenvolvimento Web</h3>
                                <div className='calendar'>
                                    <IconCalendar /><span>2018 - Hoje</span>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className='timeline-content'>
                                <h3>Tecnologia da Informação</h3>
                                <p>Uniasselvi</p>
                                <div className='calendar'>
                                    <IconCalendar /><span>2018 - 2018</span>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className='timeline-content'>
                                <h3>Desenvimento em Java</h3>
                                <p>Proway</p>
                                <div className='calendar'>
                                    <IconCalendar /><span>2016 - 2018</span>
                                </div> 
                            </div>
                        </li>
                        <li>
                            <div className='timeline-content'>
                                <h3>Desenvolvimento em Delphi</h3>
                                <p>Blusoft</p>
                                <div className='calendar'>
                                    <IconCalendar /><span>2013 - 2014</span>
                                </div> 
                            </div>
                        </li>
                    </ul>
                </div> : <div className='work'>
                    <ul>
                        <li>
                            <div className='timeline-content'>
                                <h3>FullStack Web Developer</h3>
                                <p>Need Panfletagem</p>
                                <div className='calendar'>
                                    <IconCalendar /><span>2021 - Hoje</span>
                                </div>                               
                            </div>
                        </li>
                        <li>
                            <div className='timeline-content'>
                                <h3>FullStack Web Developer</h3>
                                <p>Padaria 2 de Setembro</p>
                                <div className='calendar'>
                                    <IconCalendar /><span>2021 - Hoje</span>
                                </div>    
                            </div>
                        </li>
                    </ul>
                </div>}
                
            </GridTimeline>
        </QualificationContainer>
    )
}

export default Qualification;
