import styled from 'styled-components'

export const ListContainer = styled.section`
  padding: 48px 0;
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 472px);
  justify-content: space-between;

  gap: 0 80px;

  padding: 0;
  margin-top: 48px;
`

export const ListItem = styled.li`
  list-style: none;
`
