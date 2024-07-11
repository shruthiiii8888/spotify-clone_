import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: ${props => props.theme.fonts.main};
    background-color: ${props => props.theme.colors.secondary};
    color: ${props => props.theme.colors.light};
  }
  a {
    text-decoration: none;
    color: ${props => props.theme.colors.primary};
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
`;

export default GlobalStyle;
