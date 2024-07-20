import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html, body, #root {
    height: 100%;
    min-height: 100%;
    overflow-y: auto;
  }

  body {
    background: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.gray600};
    font-family: ${(props) => props.theme.fontFamily.sans};
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${(props) => props.theme.fontFamily.heading};
    font-weight: bold;
    color: ${(props) => props.theme.colors.white};
  }
`;
