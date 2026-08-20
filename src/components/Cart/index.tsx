import { useDispatch, useSelector } from 'react-redux'
import Button from '../Button'

import {
  Overlay,
  CartContainer,
  SidebarContainer,
  CartItem,
  TotalPrice,
  ProductList
} from './styles'

import { close, remove } from '../../store/reducers/cart'
import { RootReducer } from '../../store'

const Cart = () => {
  const dispatch = useDispatch()

  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const closeCart = () => {
    dispatch(close())
  }

  const removeFromCart = (id: number) => {
    dispatch(remove(id))
  }

  const formataPreco = (preco: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(preco)
  }

  const total = items.reduce((acc, item) => {
    return acc + item.preco
  }, 0)

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />

      <SidebarContainer>
        <ProductList>
          {items.map((item) => (
            <CartItem key={item.id}>
              <img src={item.foto} alt={item.nome} />

              <div>
                <h3>{item.nome}</h3>

                <span>{formataPreco(item.preco)}</span>
              </div>

              <button
                type="button"
                onClick={() => removeFromCart(item.id)}
                aria-label={`Remover ${item.nome} do carrinho`}
              />
            </CartItem>
          ))}
        </ProductList>

        <TotalPrice>
          <p>Valor total</p>

          <p>{formataPreco(total)}</p>
        </TotalPrice>

        <Button type="button" title="Clique aqui para continuar com a entrega">
          Continuar com a entrega
        </Button>
      </SidebarContainer>
    </CartContainer>
  )
}

export default Cart
