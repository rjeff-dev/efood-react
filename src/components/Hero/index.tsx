import * as S from './style'
import logo from '../../assets/images/logo.png'

export const Hero = () => {
  return (
    <S.HeroImage>
      <S.Container>
        <S.Content>
          <S.Logo src={logo} alt="efood" />
          <S.Title>
            Viva experiências gastronômicas no conforto da sua casa
          </S.Title>
        </S.Content>
      </S.Container>
    </S.HeroImage>
  )
}

export default Hero
