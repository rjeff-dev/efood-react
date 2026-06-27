import { TagContainer } from './style'

// Tipagem das props da Tag
export type Props = {
  variant?: 'destaque' | 'tipo' // define o tipo da tag
  children: string // texto que aparece dentro da tag
}

// Componente Tag
const Tag = ({ children, variant = 'tipo' }: Props) => (
  // Aqui ele só renderiza o container com o texto
  <TagContainer variant={variant}>{children}</TagContainer>
)

export default Tag
