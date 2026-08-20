export interface Product {
  id: number
  nome: string
  descricao: string
  porcao: string
  preco: number
  foto: string
}

export interface Restaurante {
  descricao: string
  id: number
  titulo: string
  tipo: string
  avaliacao: number
  destacado: boolean
  capa: string
  cardapio: Product[]
}
