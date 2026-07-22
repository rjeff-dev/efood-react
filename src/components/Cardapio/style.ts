import styled from 'styled-components'
import { cores } from '../../styles'

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);

  display: flex;
  justify-content: center;
  align-items: center;

  z-index: 1000;
`

export const Container = styled.div`
  position: relative;

  width: 1024px;
  max-width: 95%;
  background-color: ${cores.vermelhoRosa};

  padding: 32px;
`

export const Content = styled.div`
  display: flex;
  gap: 24px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const Image = styled.img`
  width: 280px;
  height: 280px;
  object-fit: cover;
`

export const TextContainer = styled.div`
  flex: 1;
  color: ${cores.branco};
`

export const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;

  margin-bottom: 16px;
`

export const Description = styled.p`
  font-size: 14px;
  line-height: 22px;

  margin-bottom: 16px;
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
