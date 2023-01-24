import React, { useRef } from 'react';
import { FormBox, FormButton, FormLink, FormText, FormTitle, RightBox, StartInput, } from './Form.styled'
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { addToken } from '../Redux/RegisterToken/RegisterTokenActions';
import { LanguageContext } from '../../Context/languageContext'
import { lang } from '../../lang/lang';


export const Form1 = () => {
    const dispatch = useDispatch();

    const firstNameRef = useRef();
    const lastNameRef = useRef();
    const phoneRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();

    const hendelSubmit = () => {
        axios.post("http://localhost:5001/user/register", {
            first_name: firstNameRef.current.value,
            last_name: lastNameRef.current.value,
            phone: phoneRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value,
        }).then(data => {
            console.log(data.data.token);
            dispatch(addToken(data.data.token))
            localStorage.setItem("reToken", data.data.token)
        })
    }
    const { til } = React.useContext(LanguageContext);

    return (
        <RightBox className='search-form' onSubmit={(evt) => {
            evt.preventDefault();
            hendelSubmit()
        }}>
            <FormTitle>{lang[til].form.title}</FormTitle>
            <FormBox>
                <FormText>{lang[til].form.text}</FormText>
                <FormLink to={'/Login'}>{lang[til].form.in}</FormLink>
            </FormBox>
            <StartInput type="text" ref={firstNameRef} placeholder={lang[til].profile.label1} required />
            <StartInput type="text" ref={lastNameRef} placeholder={lang[til].profile.label2} required />
            <StartInput placeholder={lang[til].profile.label3} ref={phoneRef} type={'tel'} name='phone' id='phone' required />
            <StartInput type="email" ref={emailRef} placeholder={lang[til].security.label1} required />
            <StartInput type="password" ref={passwordRef} placeholder={lang[til].form.password} required />
            <FormButton type='submit'>{lang[til].form.btn}</FormButton>
        </RightBox>
    )
}

