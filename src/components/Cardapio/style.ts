import styled from 'styled-components'
import { cores, breakpoints } from '../../styles'

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100%;
  box-sizing: border-box;

  background-color: rgba(0, 0, 0, 0.8);

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 16px;
  z-index: 1000;
`

export const Container = styled.div`
  position: relative;

  width: 1024px;
  max-width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  box-sizing: border-box;

  background-color: ${cores.vermelhoRosa};
  padding: 32px;

  @media (max-width: ${breakpoints.tablet}) {
    max-height: 90vh;
    padding: 40px 24px 24px;
  }
`

export const Content = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 24px;

  @media (max-width: ${breakpoints.tablet}) {
    gap: 20px;
  }
`

export const Image = styled.img`
  width: 280px;
  height: 280px;
  max-width: 40%;
  object-fit: cover;
  flex-shrink: 0;

  @media (max-width: ${breakpoints.tablet}) {
    width: 35%;
    height: auto;
    aspect-ratio: 1 / 1;
  }
`

export const TextContainer = styled.div`
  flex: 1;
  min-width: 0;
  color: ${cores.branco};
  overflow-wrap: anywhere;
`

export const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 16px;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 17px;
  }
`

export const Description = styled.p`
  font-size: 14px;
  line-height: 22px;
  margin-bottom: 16px;
  overflow-wrap: anywhere;
`

export const Portion = styled.p`
  font-size: 14px;
  margin-bottom: 16px;
`

export const CloseButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;

  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;

  img {
    display: block;
    width: 16px;
    height: 16px;
  }
`

export const AddButton = styled.button`
  max-width: 100%;
  box-sizing: border-box;

  background-color: #ffe8d9;
  color: ${cores.vermelhoRosa};

  border: none;
  cursor: pointer;

  padding: 8px 12px;
  font-size: 14px;
  font-weight: 700;
  margin-top: 16px;

  @media (max-width: ${breakpoints.tablet}) {
    width: 100%;
  }
`
