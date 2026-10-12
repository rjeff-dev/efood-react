import styled, { createGlobalStyle } from 'styled-components'

export const colors = {
  primary: '#E66767',
  secondary: '#FFB930',
  background: '#FFF8F2',
  surface: '#FFEBD9',
  peachCream: '#FFF0E6',
  white: '#FFFFFF',
  black: '#000000'
}

export const breakpoints = {
  desktop: '1024px',
  tablet: '768px'
}

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Roboto", sans-serif;
    list-style: none;
  }

  body {
    background-color: ${colors.background};
    color: ${colors.primary};
  }
`

export const Container = styled.div`
  width: min(100% - 48px, 1024px);
  margin: 0 auto;

  @media (max-width: ${breakpoints.desktop}) {
    width: calc(100% - 48px);
  }

  @media (max-width: ${breakpoints.tablet}) {
    width: calc(100% - 32px);
  }
`
