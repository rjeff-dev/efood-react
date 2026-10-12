import styled from 'styled-components'
import { colors } from '../../styles'
import { Props } from '.'

export const TagContainer = styled.div<Props>`
  position: relative;

  font-size: 12px;
  font-weight: bold;

  background-color: ${colors.primary};
  color: ${colors.surface};

  padding: 6px 8px;
  border-radius: 4px;
`
