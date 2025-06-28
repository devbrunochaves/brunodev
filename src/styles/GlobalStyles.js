// src/GlobalStyles.js
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root {
    --primary-color: #084b8a;
    --secondary-color: #00b4d8;
    --background-color: #0C2945;
    --text-color: #f2f2f2;
    --white: #ffffff;

    --font-poppins: 'Poppins', sans-serif;
  }

  body {
    background-color: var(--background-color);
    color: var(--text-color);
    font-family: var(--font-poppins);
    margin: 0;
    padding: 35px 0;
  }

  .container {
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 1rem;
  }
`;

export default GlobalStyles;
