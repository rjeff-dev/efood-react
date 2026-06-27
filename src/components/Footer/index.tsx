import { Container } from '../../styles'
import {
  FooterContainer,
  Logo,
  Content,
  Description,
  List,
  ListItem
} from './styles'

import logo from '../../assets/images/logo.png'
import instagram from '../../assets/images/footer/instagram-round-svgrepo-com (1) 1.png'
import facebook from '../../assets/images/footer/facebook-round-svgrepo-com 1.png'
import twitter from '../../assets/images/footer/twitter-2-svgrepo-com 1.png'

const Footer = () => (
  <FooterContainer>
    <Container>
      <Content>
        <Logo src={logo} alt="efood" />
        <List>
          <ListItem>
            <img src={instagram} alt="" />
          </ListItem>
          <ListItem>
            <img src={facebook} alt="" />
          </ListItem>
          <ListItem>
            <img src={twitter} alt="" />
          </ListItem>
        </List>
        <Description>
          A efood é uma plataforma para divulgação de estabelecimentos, a
          responsabilidade pela entrega, qualidade dos produtos é toda do
          estabelecimento contratado.
        </Description>
      </Content>
    </Container>
  </FooterContainer>
)

export default Footer
