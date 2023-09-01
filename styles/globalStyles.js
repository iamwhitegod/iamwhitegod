import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *, 
  *::after, 
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  html {
    font-size: 62.5%;
    box-sizing: border-box;
  }

  body {
    font-size: 1.6rem;
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
  }

  img, 
  picture, 
  video {
    display: block;
    max-width: 100%;
  }

  input, button, textarea, select {
    font: inherit;
  }

  h1 {
    font-size: 2rem;
  }

  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
  }
`;

export default GlobalStyle;
