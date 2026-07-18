import { Product } from '../../pages/Home'
import { Container } from '../../styles'

import ProductCard from '../PerfilCard'

import { List, Item, Section } from './style'

type Props = {
  products: Product[]
}

const PerfilList = ({ products }: Props) => (
  <Section>
    <Container>
      <List>
        {products.map((products) => (
          <Item key={products.id}>
            <ProductCard
              image={products.foto}
              title={products.nome}
              description={products.descricao}
            />
          </Item>
        ))}
      </List>
    </Container>
  </Section>
)

export default PerfilList
