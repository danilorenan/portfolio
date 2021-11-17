import styled from 'styled-components';
import TextField from '@material-ui/core/TextField'

export const ContactContainer = styled.div`
    min-height: 35rem;
    background-color: var(--dark);
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    overflow: hidden;


    @media(max-width: 502px){
        padding: 1rem;
    }
    @media(max-height: 502px){
        height: 35rem;
    }
`
export const ContactTitle = styled.h1`
    text-align: center;
    color: #fff;
    margin: 5rem;
`
export const ContainerFormContact = styled.div`
    min-width: 770px;
    inline-size: auto;
    height: 30rem;
    margin: 2rem;
    border: 4px solid var(--dark-secondary);
    display: flex;

    @media(max-width: 780px){
        width: 80%;
        min-width: 600px;
    }
    @media(max-width: 600px){
        width: 80%;
        min-width: 500px;
    }
    @media(max-width: 502px){
        width: 80%;
        min-width: 400px;
        display: flex;
        flex-direction: column;
        margin: 1rem;
        
    }
    @media(max-width: 433px){
        width: 10rem;
        margin: 0.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    @media(max-width: 408px){
        width: 40%;
        max-width: 100%;
        margin: 0.2rem;
        border: none;
    }
`
export const ContainerPhoneContact = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    padding: 2rem;
    justify-content: center;
    align-items: center;
    border-right: 4px solid var(--dark-secondary);
    margin: 2rem 0 2rem 0;

    @media(max-width: 502px){
        padding: 1rem;
        width: 100%;
        height: 25%;
        align-items: center;
        justify-content: center;
        border-right: none;
        margin: 1rem 0 1rem 0;
        text-align: center;
    }

    span {
        color: #fff;
    }
`
export const TextPhone = styled.h2`
    color: #fff;
    font-size: 1.5rem;
`
export const TextEmail = styled.h3`
    color: #fff;
    margin: 2rem 0 2rem 0;

    @media(max-width: 502px){
        margin: 1rem 0 1rem 0;
        font-size: 1rem;
    }
`
export const ContainerEmailContact = styled.form`
    background-color: var(--dark);
    width: 50%;
    margin: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 2rem 0 2rem;

    @media(max-width: 502px){
        padding: 0 1rem 0 1rem;
        width: 90%;
        height: 65%;
        
    }
    @media(max-width: 433px){
        width: 95%;
        height: 70%;
        padding: 0 0.5rem 0 0.5rem;
    }
    @media(max-width: 408px){
        width: 85%;
    }
`
export const NameTextField = styled(TextField)`
    color: #fff;
`
export const EmailTextField = styled(TextField)`
`
export const MessageTextField = styled(TextField)`
    
`
export const SendMessage = styled.input`
    color: #fff;
    margin: 0.2rem;
    background-color: #272622;
    padding: 0.2rem;
    width: 4rem;
    text-align: center;
    align-items: center;
    display: flex;
    justify-content: center;
    height: 2rem;
    border-radius: 2px;
    &:hover {
        cursor: pointer;
        background-color: var(--dark);
        border: 1px solid #272622;
        color: #272622;
    }
`