import styled from 'styled-components'

import { cores } from '../../styles'
import { ButtonContainer } from '../Button/style'

export const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  gap: 12px;
`

export const Title = styled.h2`
  margin: 0 0 4px;

  font-size: 14px;
  font-weight: bold;
  line-height: 1.3;

  color: ${cores.branco};
`

export const Text = styled.p`
  margin: 0;

  font-size: 11px;
  line-height: 1.5;

  color: ${cores.branco};
`

export const Button = styled(ButtonContainer)`
  width: 100%;

  margin-top: 4px;

  font-size: 12px;
`
