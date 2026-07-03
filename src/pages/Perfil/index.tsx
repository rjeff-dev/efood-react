import ProductList from '../../components/PerfiltList'

import pizza from '../../assets/images/pizza_marguerita.png'
import PerfilHeader from '../../components/PerfilHeader'
import Product from '../../models/Product'
import ProfileHero from '../../components/ProfileHero'
import hero from '../../assets/images/Hero.png'

const products = [
  new Product({
    id: 1,
    image: pizza,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  }),
  new Product({
    id: 2,
    image: pizza,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  }),
  new Product({
    id: 3,
    image: pizza,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  }),
  new Product({
    id: 4,
    image: pizza,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  }),
  new Product({
    id: 5,
    image: pizza,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  }),
  new Product({
    id: 6,
    image: pizza,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  })
]

const Perfil = () => (
  <>
    <PerfilHeader />
    <ProfileHero
      image={hero}
      tipo={'Italiana'}
      title={'La Dolce Vita Trattoria'}
    />

    <ProductList products={products} />
  </>
)

export default Perfil
