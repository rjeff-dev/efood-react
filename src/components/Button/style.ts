import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { colors } from '../../styles'

export const ButtonContainer = styled.button`
  background-color: ${colors.primary};
  color: ${colors.surface};
  font-size: 14px;
  font-weight: bold;
  padding: 4px 6px;
  cursor: pointer;
`

export const ButtonLink = styled(Link)`
  background-color: ${colors.primary};
  color: ${colors.surface};
  font-size: 14px;
  font-weight: bold;
  padding: 4px 6px;
  cursor: pointer;
  text-decoration: none;
`
