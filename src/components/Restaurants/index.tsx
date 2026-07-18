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
  id: number
  titulo: string
  avaliacao: number
  descricao: string
  tipo: string
  destacado?: boolean
  capa: string
}

const Restaurants = ({
  titulo,
  avaliacao,
  descricao,
  tipo,
  destacado,
  capa,
  id
}: Props) => (
  <Card>
    <ImgContainer>
      <FoodImage src={capa} alt={titulo} />

      <Tags>
        {destacado && <Tag variant="destaque">Destaque da semana</Tag>}

        <Tag variant="tipo">{tipo}</Tag>
      </Tags>
    </ImgContainer>

    <Content>
      <Header>
        <Title>{titulo}</Title>

        <Nota>
          {avaliacao}
          <Estrela src={estrelinha} alt="estrela" />
        </Nota>
      </Header>

      <Descricao>{descricao}</Descricao>

      <Button
        type="link"
        to={`/perfil/${id}`}
        title="Clique aqui para saber mais sobre esse restaurante"
      >
        Saiba mais
      </Button>
    </Content>
  </Card>
)

export default Restaurants
