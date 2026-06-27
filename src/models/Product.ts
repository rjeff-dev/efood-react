type ProductProps = {
  id: number
  image: string
  title: string
  description: string
}

class Product {
  id: number
  image: string
  title: string
  description: string

  constructor({ id, image, title, description }: ProductProps) {
    this.id = id
    this.image = image
    this.title = title
    this.description = description
  }
}

export default Product
