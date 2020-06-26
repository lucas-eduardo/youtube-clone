import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
    background-color: #f9f9f9;
  }

  body, input, select, textarea, button {
    font-size: 1rem;
    font-family: 'Roboto', Arial, sans-serif;
    -webkit-appearance: none;
    -webkit-font-smoothing: antialiased;
  }

  a {
    text-decoration: none;
  }

  button {
    cursor: pointer;
    background-color: transparent;
    border: 0;
  }
  
  #root {
    --primary: #606060;
    --secondary: #909090;

    --gray: #ccc;
    --gray83: #d3d3d3;
    --gray93: #eee;

    --white: #fff;
    --white97: #f8f8f8;

    --black: #030303;
    --black20: #333;
    --lightBlack: rgba(0, 0, 0, 0.1);

    --red: #f00;
  }
`;
