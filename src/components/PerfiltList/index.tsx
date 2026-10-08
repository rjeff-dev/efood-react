import { Container } from '../../styles'

import ProductCard from '../PerfilCard'

import * as S from './style'

type Props = {
  products: Product[]
  onOpen: (produto: Product) => void
}

const PerfilList = ({ products, onOpen }: Props) => (
  <S.Section>
    <Container>
      <S.List>
        {products.map((produto) => (
          <S.Item key={produto.id}>
            <ProductCard cardapio={produto} onOpen={() => onOpen(produto)} />
          </S.Item>
        ))}
      </S.List>
    </Container>
  </S.Section>
)

export default PerfilList
