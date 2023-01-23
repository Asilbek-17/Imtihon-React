import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
*,
*::before,
*::after{
  box-sizing: inherit;
}


html{
  height: 100%;
  box-sizing: border-box;
  scroll-behavior: smooth;
}

img{
  display: block;
}

body{
  display: flex;
  flex-direction: column;
  height: 100%;
  margin: 0;
  padding: 0;
  font-family: 'Poppins', 'Arial', 'sans-serif';
}
`

export const Container = styled.div`
  width: 100%;
  max-width: 1280px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 20px;
  padding-left: 20px;
`