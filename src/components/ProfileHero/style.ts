import styled from 'styled-components'
import { cores } from '../../styles'

type Props = {
  image: string
}

export const HeroContainer = styled.section<Props>`
  width: 100%;
  height: 280px;

  background-image: url(${({ image }) => image});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  position: relative;
  margin-bottom: 56px;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.5);
  }
`

export const Overlay = styled.div`
  position: relative;
  z-index: 1;

  max-width: 1024px;
  width: 100%;
  height: 100%;

  margin: 0 auto;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const Tipo = styled.span`
  margin-top: 24px;

  font-family: 'Roboto', sans-serif;
  font-size: 32px;
  font-style: normal;
  font-weight: 100;
  line-height: 100%;
  letter-spacing: 0;

  color: ${cores.branca};
`

export const Title = styled.h2`
  margin-bottom: 32px;

  font-family: 'Roboto', sans-serif;
  font-size: 32px;
  font-style: normal;
  font-weight: 900;
  line-height: 100%;
  letter-spacing: 0;

  color: ${cores.branca};
`
