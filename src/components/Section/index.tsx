import { Container, ListItem, Title } from './style'

export type Props = {
  title: string
}

const Section = ({ title }: Props) => (
  <Container>
    <Title>{title}</Title>
  </Container>
)
export default Section
