import styled from 'styled-components'
import { cores } from '../../styles'

import hero from '../../assets/images/Vector.png'

export const FooterContainer = styled.div`
  width: 100%;
  padding: 40px 0;
  background-image: url(${hero});
  background-repeat: repeat;
  display: flex;
`
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Logo = styled.img`
  display: block;
  align-items: center;
  margin-top: 40px;
`

export const List = styled.ul`
  display: flex;
  gap: 8px;

  margin: 0;
  padding: 0;
  list-style: none;

  margin-bottom: 80px;
  margin-top: 32px;
`

export const ListItem = styled.li`
  display: flex;
`

export const Description = styled.p`
  max-width: 480px;

  font-size: 10px;
  line-height: 16px;
  text-align: center;
`
