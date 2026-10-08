import Restaurants from '../Restaurants'
import * as S from './style'
import { Container } from '../../styles'

export type Props = {
  rests: Restaurante[]
}

const RestList = ({ rests }: Props) => {
  return (
    <S.ListContainer>
      <Container>
        <S.List>
          {rests.map((rest) => (
            <S.ListItem key={rest.id}>
              <Restaurants
                id={rest.id}
                titulo={rest.titulo}
                avaliacao={rest.avaliacao}
                descricao={rest.descricao}
                tipo={rest.tipo}
                capa={rest.capa}
                destacado={rest.destacado}
              />
            </S.ListItem>
          ))}
        </S.List>
      </Container>
    </S.ListContainer>
  )
}

export default RestList
