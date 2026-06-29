import { Container } from '../../styles'
import Product from '../../models/Product'

import ProductCard from '../PerfilCard'

import { List, Item, Section } from './style'

type Props = {
  products: Product[]
}

const PerfilList = ({ products }: Props) => (
  <Section>
    <Container>
      <List>
        {products.map((product) => (
          <Item key={product.id}>
            <ProductCard
              image={product.image}
              title={product.title}
              description={product.description}
            />
          </Item>
        ))}
      </List>
    </Container>
  </Section>
)

export default PerfilList
