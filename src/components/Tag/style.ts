import styled from 'styled-components'
import { cores } from '../../styles'
import { Props } from '.'

export const TagContainer = styled.div<Props>`
  position: relative;

  font-size: 12px;
  font-weight: bold;

  background-color: ${cores.vermelhoRosa};
  color: ${cores.branco};

  padding: 6px 8px;
  border-radius: 4px;
`
