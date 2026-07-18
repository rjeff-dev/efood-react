import { useEffect, useState } from 'react'

import { HeroImage, Container, Content, Logo, Title } from './style'
import logo from '../../assets/images/logo.png'
import { Restaurante } from '../../pages/Home'

export const Hero = () => {
  return (
    <HeroImage>
      <Container>
        <Content>
          <Logo src={logo} alt="efood" />
          <Title>Viva experiências gastronômicas no conforto da sua casa</Title>
        </Content>
      </Container>
    </HeroImage>
  )
}

export default Hero
