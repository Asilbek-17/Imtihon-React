import styled from "styled-components";

export const InfoBox1 = styled.div`
width: 671px;
margin-left: auto;
`

export const MainBookBox = styled.div`
width: 671px;
display: flex;
align-items: center;
justify-content: space-between;
margin: 0 auto;
margin-bottom: 14px;

`
export const MainBookText =  styled.p`
font-family: 'Poppins';
font-weight: 400;
font-size: 20px;
line-height: 30px;
color: rgba(13, 13, 13, 0.6);
margin: 0;

`

export const MainBookText1 = styled.div`
font-family: 'Poppins';
font-weight: 400;
font-size: 20px;
line-height: 30px;
color: #0D0D0D;
margin: 0;

`

export const MainBookText2 = styled.div`
font-family: 'Poppins';
font-weight: 400;
font-size: 16px;
line-height: 150%;
color: rgba(13, 13, 13, 0.8);
margin: 0;
`

export const MoreText = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
font-family: 'Poppins';
font-weight: 400;
font-size: 16px;
line-height: 24px;
color: #D1B89D;
margin: 0;
margin-top: 40px;
margin-bottom: 12px;

&::after {
    content: '';
    width: 511px;
    height: 1px;
    background-color: rgba(209, 184, 157, 0.6);
}

`