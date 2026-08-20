import Hero from '../../components/Hero'
import RestList from '../../components/RestaurantHero'
import { Container } from '../../styles'

import { useGetRestaurantesQuery } from '../../services/api'

const Home = () => {
  const { data: rests, isLoading } = useGetRestaurantesQuery()

  if (isLoading) {
    return <p>Carregando...</p>
  }

  return (
    <>
      <Hero />

      <Container>
        <RestList rests={rests || []} />
      </Container>
    </>
  )
}

export default Home
