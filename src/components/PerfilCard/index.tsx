import { MouseEvent } from 'react'

import Button from '../Button'
import * as S from './style'
import { parseToBrl } from '../../utils'

type Props = {
  cardapio: Product
  onOpen: () => void
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
          {`Adicionar ao carrinho - ${parseToBrl(cardapio.preco)}`}
        </Button>
      </S.Content>
    </S.Card>
  )
}

export default PerfilCard
