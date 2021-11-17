import styled from 'styled-components';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

export const QualificationContainer = styled.div`
    min-height: 35rem;
    width: 100%;
    background-color: var(--dark-secondary);
    color: #fff;
    display: flex;
    align-items: center;
    flex-direction: column;
    overflow: hidden;

`

export const QualificationTitle = styled.h1`
    text-align: center;
    margin: 5rem;
`
export const QualificationItemContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 17rem;
`
export const QualificationTitleContainer = styled.div`
    display: flex;  
    justify-content: center;
    align-items: center;
    .title {
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        cursor: pointer;
        h3 {
        }
    }
`
export const IconSchool = styled(SchoolIcon)`

`
export const IconWork = styled(WorkIcon)`

`
export const IconCalendar = styled(CalendarTodayIcon)`
    
`
export const GridTimeline = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   width: 35rem;
   margin: 2rem 0 2rem 0;

   @media (max-width: 642px) {
       width: 25rem;
   }
   @media (max-width: 468px) {
       width: 20rem;
   }
   @media (max-width: 393px) {
       width: 18rem;
   }
   @media (max-width: 360px) {
       width: 17rem;
   }
   @media (max-width: 344px) {
       width: 16rem;
       
   }
   
   .timeline-content {
       display: flex;
       flex-direction: column;
       justify-content: center;
       align-items: center;
        h3 {
            @media (max-width: 360px) {
                font-size: 1rem;
            }
        }
        p {
            @media (max-width: 344px) {
                font-size: 0.8rem;
            }
        }
   }

   .timeline-school {
       margin: 0 auto;
       position: relative;
       opacity: 0;
       animation: slide .3s ease-in forwards;

        @keyframes slide {
        
        to {
            opacity: 1;
        }
    }

       ul {
           list-style: none;
       }
       li {
           padding: 20px;
           background-color: var(--soft);
           box-shadow: 0 0 5px var(--dark);
           border-radius: 10px;
           margin-bottom: 20px;
           width: 50%;
           position: relative;
       }
       li:nth-child(odd){
           float: left;
           clear: right;
           transform: translateX(-30px);
       }
       li:nth-child(even){
           float: right;
           clear: left;
           transform: translateX(30px);
       }
       li::after {
           content: '';
           position: absolute;
           height: 15px;
           width: 15px;
           background-color: var(--primary);
           border-radius: 50%;
           top: 0;
       }
       li:nth-child(odd)::after {
           right: -30px;
           transform: translate(50%, -50%);
       }
       li:nth-child(even)::after {
           left: -30px;
           transform: translate(-50%, -50%);
       }
   }
   .timeline-school::before {
       content: '';
       position: absolute;
       height: 100%;
       width: 3px;
       background-color: var(--primary);
       left: 50%;
       transform: translateX(-50%);
   }

   .work {
       margin: 0 auto;
       position: relative;
       opacity: 0;
       animation: slide .3s ease-in forwards;

        @keyframes slide {
        
        to {
            opacity: 1;
        }
    }

       ul {
           list-style: none;
       }
       li {
           padding: 20px;
           background-color: var(--soft);
           box-shadow: 0 0 5px var(--dark);
           border-radius: 10px;
           margin-bottom: 20px;
           width: 50%;
           position: relative;
       }
       li:nth-child(odd){
           float: left;
           clear: right;
           transform: translateX(-30px);
       }
       li:nth-child(even){
           float: right;
           clear: left;
           transform: translateX(30px);
       }
       li::after {
           content: '';
           position: absolute;
           height: 15px;
           width: 15px;
           background-color: var(--primary);
           border-radius: 50%;
           top: 0;
       }
       li:nth-child(odd)::after {
           right: -30px;
           transform: translate(50%, -50%);
       }
       li:nth-child(even)::after {
           left: -30px;
           transform: translate(-50%, -50%);
       }
   }
   .work::before {
       content: '';
       position: absolute;
       height: 100%;
       width: 3px;
       background-color: var(--primary);
       left: 50%;
       transform: translateX(-50%);
   }

   .calendar {
       display: flex;
       justify-content: center;
       align-items: center;
       margin-top: .4rem;
       span {
           font-size: .7rem;
           margin: .2rem 0  0 .2rem;
       }
   }
`