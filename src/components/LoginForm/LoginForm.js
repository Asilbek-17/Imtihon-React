import React, { useRef } from 'react';
import { FormBox, FormButton, FormLink, FormText, FormTitle, RightBox, StartInput, } from './LoginForm.styled'
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { loginToken } from "../Redux/token/tokenActions";
import { LanguageContext } from '../../Context/languageContext';
import { lang } from '../../lang/lang';

export const LoginForm = () => {
    const dispatch = useDispatch();

    const emailRef = useRef();
    const passwordRef = useRef();

    const hendelSubmit = () => {
        axios.post("http://localhost:5001/user/login", {
            email: emailRef.current.value,
            password: passwordRef.current.value,
        }).then(data => {
            console.log(data);
            dispatch(loginToken(data.data.token))
                localStorage.setItem("token", data.data.token)
        })
    }
    const { til } = React.useContext(LanguageContext);


    return (
        <RightBox onSubmit={(evt) => {
            evt.preventDefault();
            hendelSubmit()
        }}>
            <FormTitle>{lang[til].form.in}</FormTitle>
            <FormBox>
                <FormText>{lang[til].form.not}</FormText>
                <FormLink to={'/Register'}>{lang[til].form.title}</FormLink>
            </FormBox>
            <StartInput type="email" ref={emailRef} placeholder={lang[til].security.label1} required />
            <StartInput type="password" ref={passwordRef} placeholder={lang[til].form.password} required />
            <FormButton type='submit'>{lang[til].form.btn}</FormButton>
        </RightBox>
    )
}
