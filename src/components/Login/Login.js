import React from 'react'
import { LoginForm } from '../../components/LoginForm/LoginForm'
import { RegisterBox } from '../Register/Register.style'
import { LeftBox } from './Login.style'


export const Login = () => {
        return <>
            <RegisterBox>
                <LeftBox />
                <LoginForm />
            </RegisterBox>
        </>
}
