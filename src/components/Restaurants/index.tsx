import * as S from './styles'

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
  <S.Card>
    <S.ImgContainer>
      <S.FoodImage src={capa} alt={titulo} />

      <S.Tags>
        {destacado && <Tag variant="destaque">Destaque da semana</Tag>}

        <Tag variant="tipo">{tipo}</Tag>
      </S.Tags>
    </S.ImgContainer>

    <S.Content>
      <S.Header>
        <S.Title>{titulo}</S.Title>

        <S.Nota>
          {avaliacao}
          <S.Estrela src={estrelinha} alt="estrela" />
        </S.Nota>
      </S.Header>

      <S.Descricao>{descricao}</S.Descricao>

      <Button
        type="link"
        to={`/perfil/${id}`}
        title="Clique aqui para saber mais sobre esse restaurante"
      >
        Saiba mais
      </Button>
    </S.Content>
  </S.Card>
)

export default Restaurants
