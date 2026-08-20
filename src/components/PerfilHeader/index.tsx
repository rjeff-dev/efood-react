import { useDispatch, useSelector } from 'react-redux'

import {
  HeaderContainer,
  HeaderBar,
  Logo,
  CartButton,
  BackLink
} from './styles'

import { open } from '../../store/reducers/cart'
import { RootReducer } from '../../store'

import logo from '../../assets/images/logo.png'

const PerfilHeader = () => {
  const dispatch = useDispatch()

  const items = useSelector((state: RootReducer) => state.cart.items)

  const openCart = () => {
    dispatch(open())
  }

  return (
    <HeaderBar>
      <HeaderContainer>
        <BackLink to="/">Restaurantes</BackLink>

        <Logo src={logo} alt="eFood" />

        <CartButton onClick={openCart}>
          {items.length} produto(s) no carrinho
        </CartButton>
      </HeaderContainer>
    </HeaderBar>
  )
}

export default PerfilHeader
