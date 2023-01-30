import { Link } from "react-router-dom";
import styled from "styled-components";

export const HomeBox = styled.div`
margin: 0 auto;
margin-top: 200px;

`

export const HomeTitle = styled.h3`
font-family: 'Poppins';
font-weight: 400;
font-size: 32px;
line-height: 48px;
color: #C9AC8C;
text-align: center;
margin-bottom: 23px;

`

export const BtnBox = styled.div`
display: flex;
justify-content: center;
align-items: center;
gap: 54px;
margin-bottom: 40px;

`

export const CategoryBtn = styled.button`
font-family: 'Poppins';
font-weight: 400;
font-size: 18px;
line-height: 27px;
color: rgba(13, 13, 13, 0.6);
background-color: transparent;
border: none;
cursor: pointer;

&:active {
    color: #C9AC8C;
}

`

export const AuthorList = styled.ul`
width: 1300px;
display: flex;
justify-content: center;
align-items: center;
flex-wrap: wrap;
gap: 20px 24px;
margin: 0 auto;
list-style: none;
padding: 0;
padding-bottom: 100px;

`

export const AuthorItem = styled.li`
width: 295px;
height: 365px;
background-color: #F5F5F5;
border-radius: 22px;
overflow: hidden;

`

export const Img = styled.img`
margin-bottom: 12px;
pointer-events: none;
`

export const AuthorItemTitle = styled.h4`
font-family: 'Poppins';
font-weight: 500;
font-size: 24px;
line-height: 36px;
color: #000000;
margin: 0;
margin-left: 16px;
margin-bottom: 6px;
pointer-events: none;

`

export const AuthorItemText = styled.p`
font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
color: rgba(0, 0, 0, 0.6);
margin: 0;
margin-left: 16px;
pointer-events: none;

`

export const LinkStyled = styled(Link)`
text-decoration: none;

`