import { HeroImage, Container, Content, Logo, Title } from './style'
import logo from '../../assets/images/logo.png'

export const Hero = () => (
  <HeroImage>
    <Container>
      <Content>
        <Logo src={logo} alt="efood" />
        <Title>Viva experiências gastronômicas no conforto da sua casa</Title>
      </Content>
    </Container>
  </HeroImage>
)

export default Hero
