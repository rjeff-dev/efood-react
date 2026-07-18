import styled from 'styled-components'
import { cores } from '../../styles'

export const Card = styled.div`
  margin-bottom: 48px;
  position: relative;

  background-color: ${cores.branca};
  border: 1px solid ${cores.vermelhoRosa};
  max-width: 472px;
  width: 100%;
  height: auto;
  overflow: hidden;
`
export const ImgContainer = styled.div`
  position: relative;
  border: none;
`
export const FoodImage = styled.img`
  width: 100%;
  display: block;
  border: none;
  height: 250px;
`

export const Content = styled.div`
  padding: 8px;
  padding-bottom: 16px; /* 🔥 garante espaço até a borda */
`

export const Tags = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;

  display: flex;
  gap: 8px;
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 8px;
`

export const Title = styled.h3`
  display: block;
  font-weight: bold;
  font-size: 18px;
  color: ${cores.vermelhoRosa};
`

export const Nota = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;

  font-weight: bold;
  color: ${cores.vermelhoRosa};
`
export const Estrela = styled.img`
  width: 16px;
  height: 16px;
`

export const Descricao = styled.p`
  font-size: 14px;
  line-height: 22px;
  padding: 0 8px 16px 8px;
  display: block;
`
