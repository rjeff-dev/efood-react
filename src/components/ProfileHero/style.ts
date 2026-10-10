import styled from 'styled-components'
import { cores, breakpoints } from '../../styles'

type Props = {
  image: string
}

export const HeroContainer = styled.section<Props>`
  width: 100%;
  height: 280px;
  box-sizing: border-box;

  background-image: url(${({ image }) => image});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  position: relative;
  margin-bottom: 40px;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.5);
  }

  @media (max-width: ${breakpoints.tablet}) {
    height: 240px;
    margin-bottom: 32px;
  }
`

export const Overlay = styled.div`
  position: relative;
  z-index: 1;

  max-width: 1024px;
  width: 100%;
  height: 100%;
  box-sizing: border-box;

  margin: 0 auto;
  padding: 0 24px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: ${breakpoints.tablet}) {
    padding: 0 20px;
  }
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

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 26px;
  }
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

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 28px;
    overflow-wrap: anywhere;
  }
`
