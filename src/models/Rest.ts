type RestProps = {
  id: number
  nome: string
  nota: number
  descricao: string
  tipo: string
  imagem: string
  destaque?: boolean
}

class Rest {
  id: number
  nome: string
  nota: number
  descricao: string
  tipo: string
  destaque?: boolean
  imagem: string

  constructor({
    id,
    nome,
    nota,
    descricao,
    tipo,
    imagem,
    destaque
  }: RestProps) {
    this.id = id
    this.nome = nome
    this.nota = nota
    this.descricao = descricao
    this.tipo = tipo
    this.imagem = imagem
    this.destaque = destaque
  }
}

export default Rest
