import styled from 'styled-components'

import fundo from '../../assets/images/fundo.png'

type Props = {
  image: string
}

export const HeaderContainer = styled.div<Props>`
  max-width: 1024px;
  width: 100%;
  height: 186px;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;

  position: relative;
  padding: 16px;
`

export const HeaderBar = styled.header`
  width: 100%;
  background-image: url(${fundo});
  background-repeat: repeat;
`

export const Logo = styled.img`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`

export const Carrinho = styled.span`
  font-size: 18px;
  line-height: 100%;
  font-weight: bold;
  margin: 80px 0;
`
