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
  max-width: 1280px;
  justify-content: center;
  margin: 35px auto;
  color: var(--text-color);
}`;

export default GlobalStyles;