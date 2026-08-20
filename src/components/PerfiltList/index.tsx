import { Product } from '../../types/Restaurants'
import { Container } from '../../styles'

import ProductCard from '../PerfilCard'

import { List, Item, Section } from './style'

type Props = {
  products: Product[]
  onOpen: (produto: Product) => void
}

const PerfilList = ({ products, onOpen }: Props) => (
  <Section>
    <Container>
      <List>
        {products.map((produto) => (
          <Item key={produto.id}>
            <ProductCard cardapio={produto} onOpen={() => onOpen(produto)} />
          </Item>
        ))}
      </List>
    </Container>
  </Section>
)

export default PerfilList
