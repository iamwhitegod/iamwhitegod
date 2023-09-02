import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

:root {
  --max-width: 114rem;
  --font-outfit: "Outfit", 'Inter', sans-serif; 


  --clr-white: #FFFFFF;

  --clr-gray: #0E0E0E;
  --clr-gray-dark: #121212;
  --clr-gray-light: #454545;
}

@media (prefers-color-scheme: dark) {
  :root {
    --max-width: 114rem;
  --font-outfit: "Outfit", 'Inter', sans-serif; 


  --clr-white: #FFFFFF;

  --clr-gray: #0E0E0E;
  --clr-gray-dark: #121212;
  --clr-gray-light: #454545;
  }
}

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

  html,
body {
  max-width: 100vw;
  overflow-x: hidden;
  min-height: 100dvh;
}

  body {
    font-size: 1.6rem;
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
    color: rgb(var(--foreground-rgb));
  background-image: url("/bg-tx.svg");
  background-color: var(--clr-gray);
  background-repeat: repeat;
  background-size: 100%;
  background-attachment: fixed;
  }

  a {
  color: inherit;
  text-decoration: none;
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


  @media (prefers-color-scheme: dark) {
    html {
    color-scheme: dark;
  }

  .logo--inverted {
    filter: invert(1);
  }

  .logo {
    filter: invert(1) drop-shadow(0 0 0.3rem #ffffff70);
  }
}
`;

export default GlobalStyles;
