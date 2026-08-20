import styled from 'styled-components'
import { cores } from '../../styles'
import { ButtonContainer } from '../Button/style'

import trash from '../../assets/images/lixeira-de-reciclagem.png'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${cores.preto};
  opacity: 0.7;
`

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }
`

export const SidebarContainer = styled.aside`
  max-width: 360px;
  width: 100%;
  background-color: ${cores.vermelhoRosa};
  z-index: 1;
  padding: 32px 8px 0 8px;
  color: #000;

  ${ButtonContainer} {
    font-size: 14px;
    width: 100%;
    background-color: ${cores.branco};
    color: ${cores.vermelhoRosa};
    border: none;
  }
`

export const ProductList = styled.ul`
  width: 100%;

  margin: 0;
  padding: 0;

  display: flex;
  flex-direction: column;
  gap: 10px;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 4px;
  }
`
export const CartItem = styled.li`
  width: 100%;
  min-height: 100px;

  padding: 8px;

  display: flex;
  align-items: center;

  background-color: ${cores.branco};

  position: relative;

  margin-bottom: 16px;

  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
    flex-shrink: 0;
    margin-right: 8px;
  }

  div {
    width: 100%;
    height: 80px;

    margin-left: 8px;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }

  h3 {
    margin: 0 0 16px 0;

    font-size: 18px;
    font-weight: 900;
    line-height: 100%;

    color: ${cores.vermelhoRosa};
  }

  span {
    display: block;
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;

    color: ${cores.vermelhoRosa};
  }

  button {
    position: absolute;
    width: 16px;
    height: 16px;

    padding: 0;
    margin: 0;

    border: 0;
    outline: none;

    background-image: url(${trash});
    background-color: transparent;

    display: block;

    cursor: pointer;
    top: 76px;
    right: 8px;
  }
`

export const TotalPrice = styled.div`
  font-size: 14px;
  font-weight: bold;

  margin-top: 40px;
  margin-bottom: 16px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  color: ${cores.branco};
`
