import styled from 'styled-components'
import { breakpoints } from '../../styles'

export const ListContainer = styled.section`
  width: 100%;
  box-sizing: border-box;
  padding: 48px 0;

  @media (max-width: ${breakpoints.tablet}) {
    padding: 32px 0;
  }
`

export const List = styled.ul`
  width: 100%;
  box-sizing: border-box;

  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  justify-content: space-between;
  gap: 32px;

  padding: 0;
  margin-top: 48px;

  @media (max-width: ${breakpoints.tablet}) {
    gap: 24px;
    margin-top: 32px;
  }
`

export const ListItem = styled.li`
  min-width: 0;
  width: 100%;
  box-sizing: border-box;
  list-style: none;
`
