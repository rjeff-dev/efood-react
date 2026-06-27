import Hero from '../../components/Hero'
import RestList from '../../components/RestaurantHero'
import { Container } from '../../styles'
import Rest from '../../models/Rest'

import hioki from '../../assets/images/Hioki_Sushi.png'
import LaDolceVita from '../../assets/images/La_Dolce_Vita_Trattoria.png'
import chili from '../../assets/images/Chili_com _carne.png'
import panelada from '../../assets/images/panelada.png'

const rests = [
  new Rest({
    id: 1,
    nome: 'Hioki Sushi',
    nota: 4.9,
    descricao:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    tipo: 'Japonesa',
    imagem: hioki,
    destaque: true
  }),
  new Rest({
    id: 2,
    nome: 'La Dolce Vita',
    nota: 4.6,
    descricao:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    tipo: 'Italiana',
    imagem: LaDolceVita
  }),
  new Rest({
    id: 3,
    nome: 'Chili com Carne',
    nota: 4.8,
    descricao:
      'Peça agora o melhor da culinária mexicana sem sair de casa! Pratos intensos, bem temperados e preparados com ingredientes selecionados. Combinação perfeita de sabores marcantes, com pimenta na medida certa e muito sabor. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o México no conforto do seu lar!',
    tipo: 'Mexicana',
    imagem: chili
  }),
  new Rest({
    id: 4,
    nome: 'Panelada',
    nota: 4.5,
    descricao:
      'Peça agora o melhor da culinária nordestina no conforto da sua casa! Pratos tradicionais, bem temperados e preparados com ingredientes frescos e selecionados. Sabores autênticos que trazem a essência da cultura brasileira em cada detalhe. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Nordeste sem sair do lar!',
    tipo: 'Brasileira',
    imagem: panelada
  })
]

const Home = () => (
  <>
    <Hero />
    <Container>
      <RestList rests={rests} />
    </Container>
  </>
)

export default Home
