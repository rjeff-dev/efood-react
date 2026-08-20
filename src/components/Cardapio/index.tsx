import { MouseEvent } from 'react'
import { useDispatch } from 'react-redux'
import { Product } from '../../types/Restaurants'

import {
  Overlay,
  Container,
  Content,
  Image,
  TextContainer,
  Title,
  Description,
  Portion,
  CloseButton,
  AddButton
} from './style'

import close from '../../assets/images/close_1.png'
import { add } from '../../store/reducers/cart'

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
  }

  return (
    <Overlay onClick={onClose}>
      <Container
        onClick={(e: MouseEvent<HTMLDivElement>) => e.stopPropagation()}
      >
        <CloseButton onClick={onClose}>
          <img src={close} alt="Clique aqui para fechar" />
        </CloseButton>

        <Content>
          <Image src={cardapio.foto} alt={cardapio.nome} />

          <TextContainer>
            <Title>{cardapio.nome}</Title>

            <Description>{cardapio.descricao}</Description>

            <Portion>Serve: {cardapio.porcao}</Portion>

            <AddButton onClick={addToCart}>
              Adicionar ao carrinho - {formataPreco(cardapio.preco)}
            </AddButton>
          </TextContainer>
        </Content>
      </Container>
    </Overlay>
  )
}

export default Cardapio
