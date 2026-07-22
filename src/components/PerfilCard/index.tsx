import Button from '../Button'
import { Card, Content, Description, Image, Title } from './style'

type Props = {
  id: number
  image: string
  title: string
  description: string
  preco: number
  onOpen: () => void
}

const formataPreco = (preco = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

const PerfilCard = ({
  image,
  title,
  description,
  id,
  preco,
  onOpen
}: Props) => {
  const getDescricao = (descricao: string) => {
    if (descricao.length > 129) {
      return descricao.slice(0, 130) + '...'
    }

    return descricao
  }

  return (
    <Card to={`/Perfil/${id}`}>
      <Image src={image} alt={title} />

      <Content>
        <Title>{title}</Title>

        <Description>{getDescricao(description)}</Description>

        <Button type="button" title="Adicionar ao carrinho" onClick={onOpen}>
          {`Adicionar ao carrinho - ${formataPreco(preco)}`}
        </Button>
      </Content>
    </Card>
  )
}

export default PerfilCard
