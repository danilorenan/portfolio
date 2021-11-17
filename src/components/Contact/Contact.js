import React, {useState} from 'react'
import { ContactContainer, MessageTextField, EmailTextField, ContactTitle, ContainerEmailContact, ContainerFormContact, ContainerPhoneContact, NameTextField, TextEmail, TextPhone, SendMessage } from './styles';
import { makeStyles } from '@material-ui/styles';

const Contact = () => {
    const [emailInput, setEmailInput] = useState('');
    const [nameInput, setNameInput] = useState('');
    const [messageInput, setMessageInput] = useState('');

    const useStyle = makeStyles(theme => ({
        root: {
            '& .MuiFormLabel-root': {
                color: '#fff'
            },
            '& .MuiInputBase-input': {
                color: '#fff'
            }
        }
    }))
    const classes = useStyle();

    return (
        <ContactContainer id='contact' name='contact'>
            <ContactTitle>Contato</ContactTitle>
            <ContainerFormContact>
                <ContainerPhoneContact>
                    <TextPhone>(47)996045902</TextPhone>
                    <TextEmail>nuna.renan@hotmail.com</TextEmail>
                    <span>Blumenau - Santa Catarina</span>
                </ContainerPhoneContact>
                    <ContainerEmailContact className={classes.root}>
                            <NameTextField
                                name="name" 
                                required id="standard-basic" 
                                label="Digite seu Nome"
                                margin='dense'
                                fullWidth
                                variant='filled'
                                value={nameInput}
                                onChange={e => setNameInput(e.target.value)}
                                >
                            </NameTextField>
                            <EmailTextField
                                name="email" 
                                required id="standard-basic" 
                                label="Digite seu Email"
                                margin='none'
                                fullWidth
                                variant='filled'
                                value={emailInput}
                                onChange={e => setEmailInput(e.target.value)}>
                            </EmailTextField>
                            <MessageTextField
                                name="message" 
                                id="outlined-multiline-static" 
                                multiline rows={4} 
                                label='Mensagem'
                                margin='normal'
                                fullWidth
                                variant='filled'
                                value={messageInput}
                                onChange={e => setMessageInput(e.target.value)}>
                            </MessageTextField>
                            <SendMessage value='Enviar' type='submit' />
                </ContainerEmailContact>
            </ContainerFormContact>
        </ContactContainer>
    )
}

export default Contact;
