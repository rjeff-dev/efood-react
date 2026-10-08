import * as S from './style'

export type Props = {
  title: string
}

const Section = ({ title }: Props) => (
  <S.Container>
    <S.Title>{title}</S.Title>
  </S.Container>
)
export default Section
