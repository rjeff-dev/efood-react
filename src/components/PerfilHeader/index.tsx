import { useDispatch, useSelector } from 'react-redux'

import * as S from './styles'

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
    <S.HeaderBar>
      <S.HeaderContainer>
        <S.BackLink to="/">Restaurantes</S.BackLink>

        <S.Logo src={logo} alt="eFood" />

        <S.CartButton onClick={openCart}>
          {items.length} produto(s) no carrinho
        </S.CartButton>
      </S.HeaderContainer>
    </S.HeaderBar>
  )
}

export default PerfilHeader
