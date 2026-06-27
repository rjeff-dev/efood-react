import {
  Card,
  Descricao,
  Title,
  Tags,
  Header,
  Nota,
  Estrela,
  ImgContainer,
  FoodImage,
  Content
} from './styles'

import Tag from '../Tag'
import estrelinha from '../../assets/images/estrelinha.png'
import Button from '../Button'

type Props = {
  nome: string
  nota: number
  descricao: string
  tipo: string
  destaque?: boolean
  imagem: string
}

const Restaurants = ({
  nome,
  nota,
  descricao,
  tipo,
  destaque,
  imagem
}: Props) => (
  <Card>
    <ImgContainer>
      <FoodImage src={imagem} alt={nome} />

      <Tags>
        {destaque && <Tag variant="destaque">Destaque da semana</Tag>}
        <Tag variant="tipo">{tipo}</Tag>
      </Tags>
    </ImgContainer>
    <Content>
      <Header>
        <Title>{nome}</Title>

        <Nota>
          {nota}
          <Estrela src={estrelinha} alt="estrela" />
        </Nota>
      </Header>

      <Descricao>{descricao}</Descricao>

      <Button
        type="link"
        to="/Perfil"
        title="Clique aqui para saber mais sobre esse restaurante"
      >
        Saiba mais
      </Button>
    </Content>
  </Card>
)

export default Restaurants
