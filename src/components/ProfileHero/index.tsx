import { HeroContainer, Info, Overlay, Tipo, Title } from './style'

type Props = {
  image: string
  tipo: string
  title: string
}

const RestaurantHero = ({ image, tipo, title }: Props) => (
  <HeroContainer image={image}>
    <Overlay>
      <Info>
        <Tipo>{tipo}</Tipo>
      </Info>
      <Info>
        <Title>{title}</Title>
      </Info>
    </Overlay>
  </HeroContainer>
)

export default RestaurantHero
