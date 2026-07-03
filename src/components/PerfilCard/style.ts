import styled from 'styled-components'
import { cores } from '../../styles'
import Button from '../Button'
import { ButtonContainer } from '../Button/style'

export const Card = styled.div`
  background-color: ${cores.vermelhoRosa};
  color: ${cores.branco};
  padding: 8px;
  display: flex;
  flex-direction: column;

  ${ButtonContainer} {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${cores.branco};
    color: ${cores.vermelhoRosa};
    border: none;
  }
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

  margin-bottom: 8px;
`

export const Description = styled.p`
  font-size: 14px;
  line-height: 22px;

  margin-bottom: 8px;
`
