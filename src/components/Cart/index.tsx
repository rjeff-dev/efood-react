import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Button from '../Button'
import DeliveryContent from '../DeliveryContent'
import PaymentContent from '../PaymentContent'
import SuccessContent from '../SuccessContent'

import * as S from './styles'

import { close, remove } from '../../store/reducers/cart'
import { RootReducer } from '../../store'

/*
  Define todas as etapas possíveis dentro da Sidebar.

  cart:
  mostra os produtos do carrinho.

  delivery:
  mostra o formulário de entrega.

  payment:
  mostra o formulário de pagamento.

  success:
  mostra a confirmação do pedido.
*/
type Etapa = 'cart' | 'delivery' | 'payment' | 'success'

const Cart = () => {
  const dispatch = useDispatch()

  /*
    Pegamos do Redux:

    isOpen:
    informa se o carrinho está aberto.

    items:
    contém os produtos adicionados ao carrinho.
  */
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  /*
    Controla qual conteúdo aparece dentro da Sidebar.

    O carrinho começa sempre na etapa "cart".
  */
  const [etapa, setEtapa] = useState<Etapa>('cart')

  /*
    Fecha o carrinho.

    Além de fechar a Sidebar, voltamos para a primeira etapa.

    Assim, quando o usuário abrir novamente o carrinho,
    ele começa novamente no conteúdo do carrinho.
  */
  const closeCart = () => {
    dispatch(close())
    setEtapa('cart')
  }

  /*
    Remove um produto do carrinho através do Redux.
  */
  const removeFromCart = (id: number) => {
    dispatch(remove(id))
  }

  /*
    Converte o número para o formato de moeda brasileira.

    Exemplo:

    190.9

    vira:

    R$ 190,90
  */
  const formataPreco = (preco: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(preco)
  }

  /*
    Soma o preço de todos os produtos do carrinho.
  */
  const total = items.reduce((acc, item) => {
    return acc + item.preco
  }, 0)

  return (
    /*
      CartContainer é o container que ocupa a tela inteira.

      A classe "is-open" continua sendo controlada pelo Redux,
      exatamente como já estava no seu projeto.
    */
    <S.CartContainer className={isOpen ? 'is-open' : ''}>
      {/*
        Overlay fica atrás da Sidebar.

        Clicando fora da Sidebar, o carrinho é fechado.
      */}
      <S.Overlay onClick={closeCart} />

      {/*
        IMPORTANTE:

        Essa é a MESMA Sidebar do seu Cart.

        Não criamos uma Sidebar para Delivery,
        outra para Payment e outra para Success.

        Apenas trocamos o conteúdo que aparece aqui dentro.
      */}
      <S.SidebarContainer>
        {/* =====================================================
            ETAPA 1 — CARRINHO
            ===================================================== */}

        {etapa === 'cart' && (
          <>
            {/*
              Lista dos produtos adicionados ao carrinho.
            */}
            <S.ProductList>
              {items.map((item) => (
                <S.CartItem key={item.id}>
                  <img src={item.foto} alt={item.nome} />

                  <div>
                    <h3>{item.nome}</h3>

                    <span>{formataPreco(item.preco)}</span>
                  </div>

                  {/*
                    Botão para remover o produto.
                  */}
                  <button
                    type="button"
                    onClick={() => removeFromCart(item.id)}
                    aria-label={`Remover ${item.nome} do carrinho`}
                  />
                </S.CartItem>
              ))}
            </S.ProductList>

            {/*
              Mostra o valor total do pedido.
            */}
            <S.TotalPrice>
              <p>Valor total</p>

              <p>{formataPreco(total)}</p>
            </S.TotalPrice>

            {/*
              Ao clicar:

              cart
                ↓
              delivery

              A Sidebar NÃO muda de posição.

              Apenas o conteúdo dentro dela muda.
            */}
            <Button
              type="button"
              title="Clique aqui para continuar com a entrega"
              onClick={() => setEtapa('delivery')}
            >
              Continuar com a entrega
            </Button>
          </>
        )}

        {/* =====================================================
            ETAPA 2 — ENTREGA
            ===================================================== */}

        {etapa === 'delivery' && (
          <DeliveryContent
            /*
              Quando o usuário clicar em:

              "Continuar com o pagamento"

              voltamos para o Cart e mudamos a etapa
              para "payment".
            */
            onContinue={() => setEtapa('payment')}
            /*
              Quando o usuário clicar em:

              "Voltar para o carrinho"

              voltamos para a etapa inicial.
            */
            onBack={() => setEtapa('cart')}
          />
        )}

        {/* =====================================================
            ETAPA 3 — PAGAMENTO
            ===================================================== */}

        {etapa === 'payment' && (
          <PaymentContent
            /*
              Passamos o total formatado para o PaymentContent.

              Exemplo:

              R$ 190,90
            */
            total={formataPreco(total)}
            /*
              Quando o usuário finalizar o pagamento:

              payment
                  ↓
              success
            */
            onFinish={() => setEtapa('success')}
            /*
              Permite voltar para a tela de entrega.
            */
            onBack={() => setEtapa('delivery')}
          />
        )}

        {/* =====================================================
            ETAPA 4 — PEDIDO REALIZADO
            ===================================================== */}

        {etapa === 'success' && (
          <SuccessContent
            /*
              Por enquanto usamos um ID fixo.

              Depois podemos substituir pelo ID real
              retornado pela API.
            */
            orderId="ORDER_ID"
            /*
              Ao clicar em "Concluir":

              fechamos a Sidebar.

              O closeCart também volta a etapa para "cart".
            */
            onFinish={closeCart}
          />
        )}
      </S.SidebarContainer>
    </S.CartContainer>
  )
}

export default Cart
