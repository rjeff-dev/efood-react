import styled from 'styled-components'

import { cores } from '../../styles'
import { ButtonContainer } from '../Button/style'

export const Container = styled.form`
  width: 100%;

  display: flex;
  flex-direction: column;
`

export const Title = styled.h2`
  margin: 0 0 12px;

  font-size: 14px;
  font-weight: bold;
  line-height: 1.2;

  color: ${cores.branco};
`

export const Form = styled.form`
  width: 100%;

  display: flex;
  flex-direction: column;

  gap: 8px;

  ${ButtonContainer} {
    width: 100%;

    margin-top: 2px;

    font-size: 12px;
  }
`

export const Field = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  gap: 4px;
`

export const SmallField = styled(Field)`
  flex: 0 0 65px;
`

export const Label = styled.label`
  font-size: 11px;
  font-weight: bold;

  color: ${cores.branco};
`

export const Input = styled.input`
  width: 100%;
  height: 25px;

  padding: 4px 8px;

  border: none;
  outline: none;

  background-color: #fff0e6;
  color: #000;

  font-size: 12px;
  font-family: inherit;

  &:focus {
    outline: 1px solid rgba(0, 0, 0, 0.4);
  }
`

export const Row = styled.div`
  width: 100%;

  display: flex;

  gap: 24px;

  ${Field} {
    flex: 1;
  }
`
