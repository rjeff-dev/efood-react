import { HeaderContainer, HeaderBar, Logo, Carrinho } from './styles'

import logo from '../../assets/images/logo.png'
import Button from '../Button'

const PerfilHeader = () => (
  <HeaderBar>
    <HeaderContainer>
      <Button type="link" to="/" title="Clique aqui para voltar para a home">
        Restaurantes
      </Button>

      <Logo src={logo} alt="Logo" />

      <Carrinho>0 produto(s) no carrinho</Carrinho>
    </HeaderContainer>
  </HeaderBar>
)
export default PerfilHeader
