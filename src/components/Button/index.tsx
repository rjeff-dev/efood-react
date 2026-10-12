import { ReactNode } from 'react'
import { ButtonContainer, ButtonLink } from './style'

type Props = {
  type: 'button' | 'link' | 'submit'
  title: string
  to?: string
  onClick?: React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>
  children: ReactNode
}

const Button = ({ type, title, to, onClick, children }: Props) => {
  if (type === 'link') {
    return (
      <ButtonLink
        to={to as string}
        title={title}
        onClick={onClick as React.MouseEventHandler<HTMLAnchorElement>}
      >
        {children}
      </ButtonLink>
    )
  }

  return (
    <ButtonContainer
      type={type}
      title={title}
      onClick={onClick as React.MouseEventHandler<HTMLButtonElement>}
    >
      {children}
    </ButtonContainer>
  )
}

export default Button
