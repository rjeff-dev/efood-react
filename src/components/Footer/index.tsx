import { Container } from '../../styles'
import * as S from './styles'

import logo from '../../assets/images/logo.png'
import instagram from '../../assets/images/footer/instagram-round-svgrepo-com (1) 1.png'
import facebook from '../../assets/images/footer/facebook-round-svgrepo-com 1.png'
import twitter from '../../assets/images/footer/twitter-2-svgrepo-com 1.png'

const Footer = () => (
  <S.FooterContainer>
    <Container>
      <S.Content>
        <S.Logo src={logo} alt="efood" />
        <S.List>
          <S.ListItem>
            <img src={instagram} alt="" />
          </S.ListItem>
          <S.ListItem>
            <img src={facebook} alt="" />
          </S.ListItem>
          <S.ListItem>
            <img src={twitter} alt="" />
          </S.ListItem>
        </S.List>
        <S.Description>
          A efood é uma plataforma para divulgação de estabelecimentos, a
          responsabilidade pela entrega, qualidade dos produtos é toda do
          estabelecimento contratado.
        </S.Description>
      </S.Content>
    </Container>
  </S.FooterContainer>
)

export default Footer
