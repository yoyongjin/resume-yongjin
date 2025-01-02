import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  /* Document */
  html {
    line-height: 1.5;
    -webkit-text-size-adjust: 100%; /* Prevent font scaling in landscape */
  }

  body {
    margin: 0;
    font-family: 'Arial', sans-serif;
  }

  /* Sections */
  main {
    display: block;
  }

  /* Grouping content */
  h1 {
    font-size: 2em;
    margin: 0.67em 0;
  }

  /* Text-level semantics */
  a {
    background-color: transparent;
    text-decoration: none;
    color: inherit;
  }

  /* Embedded content */
  img {
    border-style: none;
    max-width: 100%;
    height: auto;
  }

  /* Forms */
  button, input, select, textarea {
    font-family: inherit; /* Ensure consistency with body font */
    font-size: 100%; /* Fix inconsistent sizing in some browsers */
    margin: 0; /* Remove default margin */
  }

  button {
    overflow: visible; /* Remove inner overflow in IE */
    text-transform: none; /* Prevent uppercase text in iOS */
  }

  /* Interactive elements */
  [hidden] {
    display: none;
  }

  /* Accessibility improvements */
  *, *::before, *::after {
    box-sizing: border-box; /* Include padding and border in element size */
  }

  /* Remove default padding */
  ul, ol {
    margin: 0;
    padding: 0;
  }
`;

export default GlobalStyle;
