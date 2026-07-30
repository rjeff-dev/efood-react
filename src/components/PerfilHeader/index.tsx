import { HeaderContainer, HeaderBar, Logo, Carrinho, BackLink } from './styles'

import logo from '../../assets/images/logo.png'

const PerfilHeader = () => (
  <HeaderBar>
    <HeaderContainer>
      <BackLink to="/">Restaurantes</BackLink>

      <Logo src={logo} alt="eFood" />

      <Carrinho>0 produto(s) no carrinho</Carrinho>
    </HeaderContainer>
  </HeaderBar>
)

export default PerfilHeader
