import Restaurants from '../Restaurants'
import { ListContainer, List, ListItem } from './style'
import { Container } from '../../styles'

import { Restaurante } from '../../pages/Home'

export type Props = {
  rests: Restaurante[]
}

const RestList = ({ rests }: Props) => {
  return (
    <ListContainer>
      <Container>
        <List>
          {rests.map((rest) => (
            <ListItem key={rest.id}>
              <Restaurants
                id={rest.id}
                titulo={rest.titulo}
                avaliacao={rest.avaliacao}
                descricao={rest.descricao}
                tipo={rest.tipo}
                capa={rest.capa}
                destacado={rest.destacado}
              />
            </ListItem>
          ))}
        </List>
      </Container>
    </ListContainer>
  )
}

export default RestList
