import styled from "styled-components";

export const Form = styled.form`
position: absolute;
top: 385px;
left: calc(50% - 515px);

width: 1030px;
height: 163px;
background: #FFFFFF;
box-shadow: 0px 4px 77px rgba(0, 0, 0, 0.25);
border-radius: 15px;
padding: 29px 0
`

export const Input = styled.input`
display: block;
width: 710px;
height: 48px;
background: #F5F5F5;
border-radius: 15px;
border: none;
margin-right: 14px;
padding: 12px 27px;
font-weight: 400;
font-size: 16px;
line-height: 24px;
color: #000;
font-family: 'Poppins';

&::placeholder {
    font-family: 'Poppins';
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: rgba(13, 13, 13, 0.3);
}
`

export const SearchTitle = styled.h3`
font-weight: 400;
font-size: 32px;
line-height: 48px;
color: #D1B89D;
margin: 0;
margin-bottom: 9px;
text-align: center;
`

export const SerachBtn = styled.button`
width: 160px;
height: 48px;
background: #C9AC8C;
border-radius: 15px;
border: none;
font-family: 'Poppins';
font-weight: 400;
font-size: 16px;
line-height: 24px;
color: #EFDAC3;

`

export const SearchRow = styled.div`
display: flex;
justify-content: center;
align-items-center;
`