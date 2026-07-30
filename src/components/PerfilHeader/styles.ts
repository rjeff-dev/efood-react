import styled from 'styled-components'
import { Link } from 'react-router-dom'

import fundo from '../../assets/images/fundo.png'
import { cores } from '../../styles'

export const HeaderBar = styled.header`
  width: 100%;
  background-image: url(${fundo});
  background-repeat: repeat;
`

export const HeaderContainer = styled.div`
  max-width: 1024px;
  width: 100%;
  height: 186px;

  margin: 0 auto;
  padding: 0 16px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  position: relative;
`

export const Logo = styled.img`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`

export const BackLink = styled(Link)`
  color: ${cores.vermelhoRosa};
  font-size: 18px;
  font-weight: 700;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`

export const Carrinho = styled.span`
  color: ${cores.vermelhoRosa};
  font-size: 18px;
  font-weight: 700;
`
