import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";


export const LinksBox = styled.div`
position: absolute;
top: 0;
left: 0;
display: flex;
align-items: center;
width: 100%;

`

export const LinksItem = styled(NavLink)`
width: 33.9%;
height: 80px;
background: #F3F6F9;
padding: 23px;
font-family: 'Poppins';
font-weight: 600;
font-size: 14px;
line-height: 21px;
color: #464E5F;
text-decoration: none;
`

export const ProfileBox = styled.div`
position: absolute;
z-index: 50;
top: 0;
left: 0;
width: 100%;
height: 100%;
background-color: #fff;
`

export const ProfileForm = styled.form`
display: flex;
width: 100%;
padding: 0 104px;
padding-top: 163px;
gap: 110px;

`

export const ProfileTitle = styled.h3`
font-family: 'Poppins';
font-weight: 500;
font-size: 18px;
line-height: 27px;
color: #212121;
margin: 0;
margin-top: 43px;
margin-bottom: 32px;

`

export const ProfileInp = styled.input`
width: 707px;
height: 44px;
background: #F3F6F9;
border-radius: 4px;
padding: 12px 20px;
border: none;
margin-bottom: 43px;
`

export const ProfileInp2 = styled.input`
width: 339px;
height: 44px;
background: #F3F6F9;
border-radius: 4px;
padding: 12px 20px;
border: none;
margin-bottom: 65px;
`

export const ProfileText = styled.p`
font-family: 'Poppins';
font-weight: 400;
font-size: 13px;
line-height: 20px;
color: #464E5F;
margin: 0;
margin-bottom: 6px;

`

export const InputBox = styled.div`
width: 707px;
border-bottom: 1px solid #ECF0F3;

`

export const ProfileBtn = styled.button`
position: absolute;
bottom: 59px;
right: 340px;
display: block;
width: 141.99px;
height: 43px;
background: #152540;
border-radius: 4px;
font-family: 'Poppins';
font-style: normal;
font-weight: 600;
font-size: 13px;
line-height: 20px;
color: #FFFFFF;
border: none;


`

export const ProfileClose = styled(Link)`
position: absolute;
top: 100px;
right: 30px;

`

export const ProImg = styled.img`
width: 175px;
height: 175px;
border-radius: 50%;

`

export const ProCamera = styled.img`
position: absolute;
top: 170px;
left: 120px;
z-index: 20;
margin-top: -30px;

`

export const Label = styled.label`
position: relative;
width: 200px;
height: 200px;


`