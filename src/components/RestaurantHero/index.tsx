import Restaurants from '../Restaurants'
import { ListContainer, List, ListItem } from './style'
import { Container } from '../../styles'
import Rest from '../../models/Rest'

export type Props = {
  rests: Rest[]
}

const RestList = ({ rests }: Props) => {
  if (!rests) return null

  return (
    <ListContainer>
      <Container>
        <List>
          {rests.map((rest) => (
            <ListItem key={rest.id}>
              <Restaurants
                nome={rest.nome}
                nota={rest.nota}
                descricao={rest.descricao}
                tipo={rest.tipo}
                imagem={rest.imagem}
                destaque={rest.destaque}
              />
            </ListItem>
          ))}
        </List>
      </Container>
    </ListContainer>
  )
}

export default RestList
