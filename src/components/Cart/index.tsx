import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Button from '../Button'
import DeliveryContent, { type DeliveryValues } from '../DeliveryContent'
import PaymentContent from '../PaymentContent'
import SuccessContent from '../SuccessContent'

import * as S from './styles'

import { close, remove } from '../../store/reducers/cart'
import { type RootReducer } from '../../store'

type Etapa = 'cart' | 'delivery' | 'payment' | 'success'

const Cart = () => {
  const dispatch = useDispatch()

  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const [etapa, setEtapa] = useState<Etapa>('cart')
  const [delivery, setDelivery] = useState<DeliveryValues | null>(null)
  const [orderId, setOrderId] = useState('')

  const closeCart = () => {
    dispatch(close())
    setEtapa('cart')
    setDelivery(null)
    setOrderId('')
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

  const products = items.map((item) => ({
    id: item.id,
    price: item.preco
  }))

  return (
    <S.CartContainer className={isOpen ? 'is-open' : ''}>
      <S.Overlay onClick={closeCart} />

      <S.SidebarContainer>
        {etapa === 'cart' && (
          <>
            <S.ProductList>
              {items.map((item) => (
                <S.CartItem key={item.id}>
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
                </S.CartItem>
              ))}
            </S.ProductList>

            <S.TotalPrice>
              <p>Valor total</p>
              <p>{formataPreco(total)}</p>
            </S.TotalPrice>

            <Button
              type="button"
              title="Clique aqui para continuar com a entrega"
              onClick={() => setEtapa('delivery')}
            >
              Continuar com a entrega
            </Button>
          </>
        )}

        {etapa === 'delivery' && (
          <DeliveryContent
            onContinue={(values) => {
              setDelivery(values)
              setEtapa('payment')
            }}
            onBack={() => setEtapa('cart')}
          />
        )}

        {etapa === 'payment' && delivery && (
          <PaymentContent
            total={formataPreco(total)}
            delivery={delivery}
            products={products}
            onFinish={(id: string) => {
              setOrderId(id)
              setEtapa('success')
            }}
            onBack={() => setEtapa('delivery')}
          />
        )}

        {etapa === 'success' && (
          <SuccessContent orderId={orderId} onFinish={closeCart} />
        )}
      </S.SidebarContainer>
    </S.CartContainer>
  )
}

export default Cart
