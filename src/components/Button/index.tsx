import { ReactNode } from 'react'
import { ButtonContainer, ButtonLink } from './style'

type Props = {
  type: 'button' | 'link'
  title: string
  to?: string
  onClick?: React.MouseEventHandler
  children: ReactNode
}

const Button = ({ type, title, to, onClick, children }: Props) => {
  if (type === 'button') {
    return (
      <ButtonContainer type="button" title={title} onClick={onClick}>
        {children}
      </ButtonContainer>
    )
  }

  return (
    <ButtonLink to={to as string} title={title} onClick={onClick}>
      {children}
    </ButtonLink>
  )
}

export default Button
