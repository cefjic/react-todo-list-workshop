import styled, { createGlobalStyle } from 'styled-components';

import { colors, spacing } from '@proprioo/salatim';

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  html, body {
    margin: 0;
    padding: 0;
  }
  html {
    scroll-behavior: smooth;
    height: 100%;
    min-height: 100%;
  }
  body {
    font-family: 'Roboto', sans-serif;
    height: inherit;
    min-height: inherit;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: ${colors.background};
  }
  a {
    text-decoration: none;
  }
`;

export const TasksWrapper = styled.div`
  margin: ${spacing.big} 0;

  fieldset + fieldset {
    margin-top: ${spacing.small};
  }
`;

export const FormLayout = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  > div {
    width: 100%;
  }

  button {
    margin-top: ${spacing.small};
  }
`;

export const Count = styled.div`
  margin-bottom: ${spacing.big};
`;
