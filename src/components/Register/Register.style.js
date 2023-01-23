import { Field, Form } from "formik";
import { Link } from "react-router-dom";
import styled from "styled-components";
import registerImage from '../../assets/images/register.svg'

export const RegisterBox = styled.div`
position: absolute;
z-index: 50;
top: 0;
left: 0;
width: 100%;
height: 100%;
background-color: #fff;
display: flex;
align-items: center;
`

export const LeftBox = styled.div`
width: 50%;
height: 100%;
background: url(${registerImage});
background-size: cover;
background-color: #135;
`

export const RightBox = styled(Form)`
width: 50%;
height: 100%;
background-color: #fff;
padding-top: 75px;
padding-left: 108px;

`

export const Img = styled.img`
width: 50%;
height: 100%;
`

export const FormTitle = styled.h2`
font-family: 'Arial Black';
font-weight: 900;
font-size: 36px;
line-height: 51px;
color: #000000;
margin: 0;
margin-bottom: 10px;
`

export const FormText = styled.p`
font-style: normal;
font-weight: 400;
font-size: 13px;
line-height: 15px;
color: #000000;
margin: 0;
margin-right: 5px;
`

export const FormBox = styled.div`
display: flex;
align-items: center;
margin-bottom: 21px;
`

export const FormLink = styled(Link)`
font-family: 'Poppins';
font-weight: 400;
font-size: 13px;
line-height: 15px;
color: #549FF9;
text-decoration: none;

`

export const StartInput = styled(Field)`
display: block;
width: 330px;
height: 46px;
padding: 16px 29px;
background: #FFFFFF;
border: 1px solid #B4B4BB;
border-radius: 10px;
margin-bottom: 17px;

`