import { Accordion, AccordionDetails, FormControl } from '@mui/material';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Row = styled.div`
display: flex;
justify-content: center;
align-items: center;
padding: 32px 0;
padding-right: 30px;
`

export const LinkStyle = styled(NavLink)`
display: block;
font-family: 'Poppins';
font-weight: 400;
font-size: 16px;
line-height: 144.4%;
color: #0D0D0D;
text-decoration: none;
margin-right: 42px;
opacity: .6;
&:active {
    opacity: 1;
}
`

export const Logo = styled(Link)`
font-family: 'Poppins';

font-weight: 400;
font-size: 25px;
line-height: 38px;
color: #D1B89D;
text-decoration: none;
margin-right: auto;
`

export const Selection = styled.select`
border: none;
width: 10px;
height: 40px;
background-image: url('../../assets/images/Mask Group.png');
background-size: 49px;
margin-left: 10px

`

export const Label = styled.label`
display: flex;
align-items: center;
`


export const Accordion1 = styled(Accordion)`
position: absolute !important;
top: 20px;
right: 30px;
z-index: 10;
width: 120px !important;
box-shadow: 0px 0 0 0 rgb(0 0 0 / 0), 0px 0 0 0px rgb(0 0 0 / 0%), 0px 0 0 0 rgb(0 0 0 / 0%) !important;

`

export const AccordionDetails1 = styled(AccordionDetails)`
width: 150px !important;
background: #F5F5F5;
border-radius: 10px;
`

export const AccordionLink = styled(Link)`
display: block;
font-family: 'Poppins';
font-weight: 500;
font-size: 16px;
line-height: 24px;
color: #000000;
text-decoration: none;

`