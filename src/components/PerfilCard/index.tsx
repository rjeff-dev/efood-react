import { MouseEvent } from 'react'

import Button from '../Button'
import * as S from './style'

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
    <S.Card to={`/Perfil/${cardapio.id}`}>
      <S.Image src={cardapio.foto} alt={cardapio.nome} />

      <S.Content>
        <S.Title>{cardapio.nome}</S.Title>

        <S.Description>{getDescricao(cardapio.descricao)}</S.Description>

        <Button
          type="button"
          title="Adicionar ao carrinho"
          onClick={handleOpen}
        >
          {`Adicionar ao carrinho - ${formataPreco(cardapio.preco)}`}
        </Button>
      </S.Content>
    </S.Card>
  )
}

export default PerfilCard
