import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { breakpoints, cores } from '../../styles'
import { ButtonContainer } from '../Button/style'

export const Card = styled(Link)`
  width: 100%;
  min-width: 0;
  height: 100%;
  box-sizing: border-box;

  background-color: ${cores.vermelhoRosa};
  color: ${cores.branco};
  padding: 8px;

  display: flex;
  flex-direction: column;

  text-decoration: none;

  ${ButtonContainer} {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    background-color: ${cores.branco};
    color: ${cores.vermelhoRosa};
    border: none;
  }
`

export const Image = styled.img`
  width: 100%;
  height: 145px;
  max-width: 100%;
  flex-shrink: 0;

  object-fit: cover;
  display: block;

  @media (max-width: ${breakpoints.tablet}) {
    height: auto;
    aspect-ratio: 16 / 9;
  }
`

export const Content = styled.div`
  margin-top: 8px;
  flex: 1;

  display: flex;
  flex-direction: column;
`

export const Title = styled.h3`
  font-size: 16px;
  font-weight: bold;
  line-height: 20px;

  margin: 0 0 8px;
  min-height: 40px;

  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`

export const Description = styled.p`
  font-size: 14px;
  line-height: 20px;

  margin: 0 0 8px;

  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;

  flex: 1;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 13px;
    line-height: 20px;
  }
`
