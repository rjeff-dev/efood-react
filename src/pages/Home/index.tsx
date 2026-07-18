import { useEffect, useState } from 'react'

import Hero from '../../components/Hero'
import RestList from '../../components/RestaurantHero'
import { Container } from '../../styles'

export type Product = {
  id: number
  foto: string
  preco: number
  nome: string
  descricao: string
  porcao: string
}

export type Restaurante = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: Product[]
}

const Home = () => {
  const [rests, setRests] = useState<Restaurante[]>([])

  useEffect(() => {
    fetch('https://api-ebac.vercel.app/api/efood/restaurantes').then((res) =>
      res.json().then((res) => setRests(res))
    )
  }, [])

  return (
    <>
      <Hero />
      <Container>
        <RestList rests={rests} />
      </Container>
    </>
  )
}

export default Home
