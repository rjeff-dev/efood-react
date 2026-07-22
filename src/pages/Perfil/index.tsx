import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import PerfilHeader from '../../components/PerfilHeader'
import ProfileHero from '../../components/ProfileHero'
import ProductList from '../../components/PerfiltList'

import { Product, Restaurante } from '../Home'
import Cardapio from '../../components/Cardapio'

const Perfil = () => {
  const { id } = useParams()

  const [restInfo, setRestInfo] = useState<Restaurante | null>(null)
  const [produtoSelecionado, setProdutoSelecionado] = useState<Product | null>(
    null
  )

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

  const abrirModal = (produto: Product) => {
    setProdutoSelecionado(produto)
  }

  const fecharModal = () => {
    setProdutoSelecionado(null)
  }

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

      <ProductList products={restInfo.cardapio} onOpen={abrirModal} />

      <Cardapio
        image={produtoSelecionado?.foto ?? ''}
        title={produtoSelecionado?.nome ?? ''}
        description={produtoSelecionado?.descricao ?? ''}
        portion={produtoSelecionado?.porcao ?? ''}
        price={produtoSelecionado?.preco ?? 0}
        isOpen={produtoSelecionado !== null}
        onClose={fecharModal}
      />
    </>
  )
}

export default Perfil
