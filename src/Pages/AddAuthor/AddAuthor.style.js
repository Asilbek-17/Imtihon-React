import { Link } from "react-router-dom";
import styled from "styled-components";

export const SelectGenre = styled.select`
display: block;
width: 330px;
height: 46px;
padding-left: 29px;
background: #FFFFFF;
border: 1px solid #B4B4BB;
border-radius: 10px;
margin-bottom: 17px;
font-family: 'Poppins';
font-weight: 400;
font-size: 14px;
line-height: 21px;
color: #AAAAAA;
`

export const OptionGenre = styled.option`
font-family: 'Poppins';
font-weight: 400;
font-size: 14px;
line-height: 21px;
color: #AAAAAA;

`

export const TeaxtArea = styled.textarea`
width: 330px;
height: 82px;
background: #FFFFFF;
border: 1px solid #B4B4BB;
border-radius: 10px;
padding: 13px 22px;
resize: none;

&::placeholder{
    font-family: 'Poppins';
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    color: #AAAAAA;
}

`

export const LinkStyleClose = styled(Link)`
position: absolute;
    top: 10px;
    right: 10px;



`