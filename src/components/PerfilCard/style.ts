import styled from 'styled-components'
import { cores } from '../../styles'

export const Card = styled.div`
  background-color: ${cores.vermelhoRosa};
  padding: 8px;
  display: flex;
  flex-direction: column;
`
export const Image = styled.img`
  width: 100%;
  height: 168px;
  object-fit: cover;

  display: block;
`

export const Content = styled.div`
  margin-top: 8px;
`

export const Title = styled.h3`
  font-size: 16px;
  font-weight: bold;
  color: ${cores.branca};

  margin-bottom: 8px;
`

export const Description = styled.p`
  font-size: 14px;
  line-height: 22px;
  color: ${cores.branca};

  margin-bottom: 8px;
`
