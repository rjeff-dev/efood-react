import styled from 'styled-components'
import { breakpoints } from '../../styles'

export const Section = styled.section`
  width: 100%;
  padding: 56px 0;
  box-sizing: border-box;

  @media (max-width: ${breakpoints.tablet}) {
    padding: 32px 0;
  }
`

export const List = styled.ul`
  width: 100%;
  box-sizing: border-box;

  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 32px;

  padding: 0;
  margin: 0;

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 20px;
  }
`

export const Item = styled.li`
  width: 100%;
  min-width: 0;
  box-sizing: border-box;
  list-style: none;
`
