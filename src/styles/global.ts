import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    border: 0;
    outline: 0;
  }

  a {
    text-decoration: none;
  }

  body {
    color: ${({ theme }) => theme.colors.ink};
    background: ${({ theme }) => theme.colors.mostDarkestWhite};
    text-rendering: optimizeLegibility !important;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased !important;
  }

  body,
  button,
  input,
  textarea {
    font: 1.6rem 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  html {
    font-size: 62.5%;
  }

  h1,
  h2,
  h3,
  strong {
    font-weight: 700;
  }

  img {
    display: block;
    height: auto;
    max-width: 100%;
  }

  input[type="search"] {
    -webkit-appearance: textfield;
  }

  input[type="search"]::-webkit-search-cancel-button,
  input[type="search"]::-webkit-search-decoration {
    -webkit-appearance: none;
  }

  ul {
    list-style: none;
  }

  #root {
    width: 100%;
    max-width: 72rem;
    margin: 0 auto;
    padding: ${({ theme }) => theme.spacings.small};
  }
`;
