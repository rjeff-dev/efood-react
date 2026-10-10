import styled from 'styled-components'
import { Link } from 'react-router-dom'

import fundo from '../../assets/images/fundo.png'
import { cores, breakpoints } from '../../styles'

export const HeaderBar = styled.header`
  width: 100%;
  background-image: url(${fundo});
  background-repeat: repeat;
  background-position: center;
`

export const HeaderContainer = styled.div`
  max-width: 1024px;
  width: 100%;
  min-height: 186px;
  box-sizing: border-box;

  margin: 0 auto;
  padding: 24px 16px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;

  position: relative;

  @media (max-width: ${breakpoints.tablet}) {
    min-height: 150px;
    padding: 24px 20px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    min-height: 130px;
    padding: 20px 12px;

    align-items: flex-end;
    gap: 8px;
  }
`

export const Logo = styled.img`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  display: block;
  width: auto;
  max-width: 160px;
  max-height: 60px;
  object-fit: contain;

  @media (max-width: ${breakpoints.tablet}) {
    max-width: 130px;
    max-height: 50px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    max-width: 105px;
    max-height: 42px;
  }
`

export const BackLink = styled(Link)`
  color: ${cores.vermelhoRosa};
  font-size: 18px;
  font-weight: 700;
  text-decoration: none;
  flex-shrink: 0;

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 13px;
    position: relative;
    z-index: 1;
  }
`

export const CartButton = styled.button`
  color: ${cores.vermelhoRosa};
  font-size: 18px;
  font-weight: 700;
  font-family: inherit;
  text-align: right;

  background: transparent;
  border: none;
  padding: 0;
  cursor: pointer;
  flex-shrink: 0;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 12px;
    max-width: 125px;
    position: relative;
    z-index: 1;
  }
`
