import ProductList from '../../components/PerfiltList'

import PerfilHeader from '../../components/PerfilHeader'
import ProfileHero from '../../components/ProfileHero'
import hero from '../../assets/images/Hero.png'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

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

const Perfil = () => {
  const { id } = useParams()

  const [restInfo, setRestInfo] = useState<Restaurante | null>(null)

  useEffect(() => {
    fetch('https://api-ebac.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res: Restaurante[]) => {
        const restaurante = res.find((item) => item.id === Number(id))
        if (restaurante) {
          setRestInfo(restaurante)
        }
      })
  }, [id])

  if (!restInfo) {
    return <h2>Carregando...</h2>
  }

  return (
    <>
      <PerfilHeader />

      <ProfileHero
        image={restInfo.capa}
        tipo={restInfo.tipo}
        title={restInfo.titulo}
      />

      <ProductList products={restInfo.cardapio} />
    </>
  )
}

export default Perfil
