import { HeaderContainer, HeaderBar, Logo, Carrinho } from './styles'

import logo from '../../assets/images/logo.png'

const PerfilHeader = () => (
  <HeaderBar>
    <HeaderContainer>
      <Carrinho>Restaurantes</Carrinho>

      <Logo src={logo} alt="Logo" />

      <Carrinho>0 produto(s) no carrinho</Carrinho>
    </HeaderContainer>
  </HeaderBar>
)
export default PerfilHeader
