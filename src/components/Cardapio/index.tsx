import { MouseEvent } from 'react'
import { useDispatch } from 'react-redux'

import * as S from './style'

import close from '../../assets/images/close_1.png'
import { add, open } from '../../store/reducers/cart'

type Props = {
  cardapio: Product
  isOpen: boolean
  onClose: () => void
}

const formataPreco = (preco = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}
const Cardapio = ({ cardapio, isOpen, onClose }: Props) => {
  const dispatch = useDispatch()
  if (!isOpen) {
    return null
  }
  const addToCart = () => {
    dispatch(add(cardapio))
    onClose()
    dispatch(open())
  }
  return (
    <S.Overlay onClick={onClose}>
      <S.Container
        onClick={(e: MouseEvent<HTMLDivElement>) => e.stopPropagation()}
      >
        <S.CloseButton onClick={onClose}>
          <img src={close} alt="Clique aqui para fechar" />
        </S.CloseButton>

        <S.Content>
          <S.Image src={cardapio.foto} alt={cardapio.nome} />
          <S.TextContainer>
            <S.Title>{cardapio.nome}</S.Title>
            <S.Description>{cardapio.descricao}</S.Description>
            <S.Portion>Serve: {cardapio.porcao}</S.Portion>
            <S.AddButton onClick={addToCart}>
              Adicionar ao carrinho - {formataPreco(cardapio.preco)}
            </S.AddButton>
          </S.TextContainer>
        </S.Content>
      </S.Container>
    </S.Overlay>
  )
}

export default Cardapio
