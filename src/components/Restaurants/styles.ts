import styled from 'styled-components'
import { cores, breakpoints } from '../../styles'

export const Card = styled.div`
  position: relative;

  background-color: ${cores.branca};
  border: 1px solid ${cores.vermelhoRosa};

  width: 100%;
  max-width: 472px;
  min-width: 0;
  height: auto;
  box-sizing: border-box;
  overflow: hidden;

  @media (max-width: ${breakpoints.tablet}) {
    max-width: none;
    margin-bottom: 24px;
  }
`

export const ImgContainer = styled.div`
  position: relative;
  border: none;
  width: 100%;
`

export const FoodImage = styled.img`
  width: 100%;
  height: 250px;
  display: block;
  border: none;
  object-fit: cover;

  @media (max-width: ${breakpoints.tablet}) {
    height: 200px;
  }
`

export const Content = styled.div`
  min-width: 0;
  box-sizing: border-box;
  padding: 8px 8px 16px;
`

export const Tags = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  left: 16px;

  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
  gap: 8px;
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 12px;

  min-width: 0;
  padding: 8px;

  @media (max-width: ${breakpoints.tablet}) {
    gap: 8px;
  }
`

export const Title = styled.h3`
  min-width: 0;
  margin: 0;

  font-weight: bold;
  font-size: 18px;
  color: ${cores.vermelhoRosa};
  overflow-wrap: anywhere;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 16px;
  }
`

export const Nota = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  flex-shrink: 0;

  font-weight: bold;
  color: ${cores.vermelhoRosa};
`

export const Estrela = styled.img`
  width: 16px;
  height: 16px;
  flex-shrink: 0;
`

export const Descricao = styled.p`
  font-size: 14px;
  line-height: 22px;
  padding: 0 8px 16px;
  margin: 0;
  overflow-wrap: anywhere;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 13px;
    line-height: 20px;
  }
`
