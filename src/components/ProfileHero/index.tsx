import { HeroContainer, Overlay, Tipo, Title } from './style'

type Props = {
  image: string
  tipo: string
  title: string
}

const RestaurantHero = ({ image, tipo, title }: Props) => (
  <HeroContainer image={image}>
    <Overlay>
      <Tipo>{tipo}</Tipo>

      <Title>{title}</Title>
    </Overlay>
  </HeroContainer>
)

export default RestaurantHero
