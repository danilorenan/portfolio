import styled from 'styled-components';

export const FooterContainer = styled.div`
    height: 5rem;
    background-color: var(--dark-secondary);
    color: #fff;
    font-size: .8rem;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    overflow: hidden;

    @media (max-width: 570px){
        margin-bottom: 1.5rem;
    }

    a {
        text-decoration: underline;
        color: #fff;
    }
`