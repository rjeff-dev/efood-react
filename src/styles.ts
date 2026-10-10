import styled, { createGlobalStyle } from 'styled-components'

export const cores = {
  vermelhoRosa: '#E66767',
  amarelo: '#FFB930',
  fundoQuente: '#FFF8F2',
  branco: '#FFEBD9',
  branca: '#FFFFFF',
  preto: '#000'
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
    background-color: ${cores.fundoQuente};
    color: ${cores.vermelhoRosa};
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
