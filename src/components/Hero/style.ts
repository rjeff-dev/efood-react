import styled from 'styled-components'

import heroImg from '../../assets/images/Vector.png'

import { cores } from '../../styles'

export const HeroImage = styled.div`
  width: 100%;
  height: 384px;
  background-color: ${cores.fundoQuente};
  background-image: url(${heroImg});
  background-repeat: repeat;
  display: flex;
`

export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Content = styled.div`
  text-align: center;
`

export const Logo = styled.img`
  margin-bottom: 16px;
`

export const Title = styled.p`
  font-size: 18px;
  font-weight: bold;
  color: ${cores.vermelhoRosa};
`
