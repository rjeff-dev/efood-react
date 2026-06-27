import styled, { createGlobalStyle } from 'styled-components'

export const cores = {
  vermelhoRosa: '#E66767',
  amarelo: '#FFB930',
  fundoQuente: '#FFF8F2',
  branco: '#FFEBD9',
  branca: '#FFFFFF'
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
    background-color: ${cores.branca};
    color: ${cores.vermelhoRosa};
  }
`

export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
`
