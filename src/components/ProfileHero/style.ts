import styled from 'styled-components'
import { cores } from '../../styles'

type Props = {
  image: string
}

export const HeroContainer = styled.div<Props>`
  width: 100%;
  height: auto;

  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  position: relative;
  margin-bottom: 56px;
`

export const Overlay = styled.div`
  width: 100%;
  height: 100%;

  background-color: rgba(0, 0, 0, 0.5);

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const Info = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  padding: 24px;

  color: ${cores.branca};
`

export const Tipo = styled.span`
  display: block;
  margin-bottom: 8px;
  font-size: 32px;
  line-height: 100%;
`

export const Title = styled.h2`
  font-size: 32px;
  font-weight: bold;
  max-width: 680px;
`
