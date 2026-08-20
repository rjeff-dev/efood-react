import { MouseEvent } from 'react'

import Button from '../Button'
import { Card, Content, Description, Image, Title } from './style'
import { Product } from '../../types/Restaurants'

type Props = {
  cardapio: Product
  onOpen: () => void
}

const formataPreco = (preco = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

export const getDescricao = (descricao: string) => {
  if (descricao.length > 129) {
    return descricao.slice(0, 130) + '...'
  }

  return descricao
}

const PerfilCard = ({ cardapio, onOpen }: Props) => {
  const handleOpen = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    event.stopPropagation()

    onOpen()
  }

  return (
    <Card to={`/Perfil/${cardapio.id}`}>
      <Image src={cardapio.foto} alt={cardapio.nome} />

      <Content>
        <Title>{cardapio.nome}</Title>

        <Description>{getDescricao(cardapio.descricao)}</Description>

        <Button
          type="button"
          title="Adicionar ao carrinho"
          onClick={handleOpen}
        >
          {`Adicionar ao carrinho - ${formataPreco(cardapio.preco)}`}
        </Button>
      </Content>
    </Card>
  )
}

export default PerfilCard
