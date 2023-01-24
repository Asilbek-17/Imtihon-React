import React from 'react'
import { useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import { Form1 } from '../../components/Form/Form'
import { Login } from '../Login/Login'
import { LeftBox, RegisterBox } from './Register.style'

export const Register = () => {
  const state = useSelector((state) => state)
  if (localStorage.getItem('reToken')) {
    return (
      <>
        <Login />
        <Routes>
          <Route path="/Register" element={<Register />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </>
    )
  } else {
    return (
      <RegisterBox>
        <LeftBox />
        <Form1 />
      </RegisterBox>
    )
  }
}
