import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    border: none;
    -webkit-font-smoothing: antialiased;
  }

  ul {
    list-style: none;
  }
  
  body {
    background-color: ${(props) => props.theme.colors.spaceBlack};
    background-image: url("src/assets/background-stars.svg");
    background-size: cover;
  }

  h1 {
    color: ${(props) => props.theme.colors.white}
  }
`;
