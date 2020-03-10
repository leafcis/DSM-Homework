import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    overflow: hidden;
  }

  body {
    overflow: auto;
    font-family: 'SeoulHangang', sans-serif;
    margin: 0;
  }
`

export default GlobalStyle;

