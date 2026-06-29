import Button from '../Button'
import { Card, Content, Description, Image, Title } from './style'

type Props = {
  image: string
  title: string
  description: string
}

const PerfilCard = ({ description, image, title }: Props) => (
  <Card>
    <Image src={image} alt={title} />

    <Content>
      <Title>{title}</Title>

      <Description>{description}</Description>

      <Button type="button" title="Adicionar ao carrinho">
        Adicionar ao carrinho
      </Button>
    </Content>
  </Card>
)

export default PerfilCard
