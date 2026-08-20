import { useState } from 'react'
import { useParams } from 'react-router-dom'

import PerfilHeader from '../../components/PerfilHeader'
import ProfileHero from '../../components/ProfileHero'
import ProductList from '../../components/PerfiltList'
import Cardapio from '../../components/Cardapio'

import { Product } from '../../types/Restaurants'

import { useGetRestaurantesQuery } from '../../services/api'

const Perfil = () => {
  const { id } = useParams()

  const { data: restaurantes, isLoading } = useGetRestaurantesQuery()

  // Produto que foi clicado para abrir a modal
  const [produtoSelecionado, setProdutoSelecionado] = useState<Product | null>(
    null
  )

  const restInfo = restaurantes?.find(
    (restaurante) => restaurante.id === Number(id)
  )

  // Abre a modal com o produto selecionado
  const abrirModal = (produto: Product) => {
    setProdutoSelecionado(produto)
  }

  // Fecha a modal
  const fecharModal = () => {
    setProdutoSelecionado(null)
  }

  if (isLoading) {
    return <h2>Carregando...</h2>
  }

  if (!restInfo) {
    return <h2>Restaurante não encontrado</h2>
  }

  return (
    <>
      <PerfilHeader />

      <ProfileHero
        image={restInfo.capa}
        tipo={restInfo.tipo}
        title={restInfo.titulo}
      />

      <ProductList products={restInfo.cardapio} onOpen={abrirModal} />

      {produtoSelecionado && (
        <Cardapio
          cardapio={produtoSelecionado}
          isOpen={true}
          onClose={fecharModal}
        />
      )}
    </>
  )
}

export default Perfil
