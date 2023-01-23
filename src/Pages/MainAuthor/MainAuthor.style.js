import { Link } from "react-router-dom";
import styled from "styled-components";

export const RowMain = styled.div`
display: flex;
justify-content: space-between;
margin-bottom: 100px;
`

export const InfoBox = styled.div`
width: 671px;

`

export const MainTitle = styled.h3`
font-family: 'Poppins';
font-weight: 400;
font-size: 48px;
line-height: 72px;
color: #D1B89D;
margin:0;
margin-top: 45px;
margin-bottom: 8px;

`

export const MainImg = styled.img`
width: 505px;
height: 681px;
border-radius: 20px;

`

export const MainYearTitle = styled.h4`
font-family: 'Poppins';
font-weight: 400;
font-size: 35px;
line-height: 144.4%;
color: #D1B89D;
margin:0;
margin-left : 5px;
margin-right : 5px;
`

export const MainText = styled.p`
font-family: 'Poppins';
font-weight: 400;
font-size: 16px;
line-height: 24px;
color: rgba(13, 13, 13, 0.8);
margin:0;
margin-bottom: 44px;

`

export const MainYearBox = styled.div`
display: flex;
align-items: center;

`

export const MainYearText = styled.p`
font-family: 'Poppins';
font-weight: 400;
font-size: 12px;
line-height: 18px;
color: rgba(13, 13, 13, 0.6);
margin: 0;
margin-left : 5px;
margin-right : 5px;

`

export const RowBooks = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
margin-bottom: 30px;
padding-bottom: 50px;

`

export const AuthorBooksText = styled(Link)`
font-family: 'Poppins';
font-weight: 400;
font-size: 16px;
line-height: 24px;
color: #0D0D0D;
margin: 0;
text-decaration: none;

`