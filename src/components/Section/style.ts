import styled from 'styled-components'
import { breakpoints } from '../../styles'

export const Container = styled.section`
  width: 100%;
  box-sizing: border-box;
  padding: 48px 0;

  @media (max-width: ${breakpoints.tablet}) {
    padding: 32px 0;
  }
`

export const ListItem = styled.li`
  list-style: none;
`

export const Title = styled.h3`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 8px;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 15px;
  }
`
