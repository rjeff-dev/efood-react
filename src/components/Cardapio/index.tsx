import { MouseEvent } from 'react'

import Button from '../Button'

import {
  Overlay,
  Container,
  Content,
  Image,
  TextContainer,
  Title,
  Description,
  Portion,
  CloseButton
} from './style'

import close from '../../assets/images/close_1.png'

type Props = {
  image: string
  title: string
  description: string
  portion: string
  price: number
  isOpen: boolean
  onClose: () => void
}

const formataPreco = (preco = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

const Cardapio = ({
  image,
  title,
  description,
  portion,
  price,
  isOpen,
  onClose
}: Props) => {
  if (!isOpen) {
    return null
  }

  return (
    <Overlay onClick={onClose}>
      <Container
        onClick={(e: MouseEvent<HTMLDivElement>) => e.stopPropagation()}
      >
        <CloseButton onClick={onClose}>
          <img src={close} alt="Clique aqui para fechar " />
        </CloseButton>

        <Content>
          <Image src={image} alt={title} />

          <TextContainer>
            <Title>{title}</Title>

            <Description>{description}</Description>

            <Portion>Serve: {portion}</Portion>

            <Button type="button" title="Adicionar ao carrinho">
              Adicionar ao carrinho - {formataPreco(price)}
            </Button>
          </TextContainer>
        </Content>
      </Container>
    </Overlay>
  )
}

export default Cardapio
