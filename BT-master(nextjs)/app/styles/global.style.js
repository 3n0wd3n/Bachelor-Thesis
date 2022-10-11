import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
    user-select: none;
    outline: none;
    scroll-behavior: smooth;
  }
  body {
    overflow: hidden;
  }
  button {
    cursor: pointer;
    outline: none;
  }
  input {
    outline: none;
  }

`;
