import Button from '../Button'

import * as S from './styles'

type SuccessContentProps = {
  onFinish: () => void

  orderId: string
}

const SuccessContent = ({ onFinish, orderId }: SuccessContentProps) => {
  return (
    <S.Container>
      <S.Title>Pedido realizado - {orderId}</S.Title>

      <S.Text>
        Estamos felizes em informar que seu pedido já está em processo de
        preparação e, em breve, será entregue no endereço fornecido.
      </S.Text>

      <S.Text>
        Gostaríamos de ressaltar que nossos entregadores não estão autorizados a
        realizar cobranças extras.
      </S.Text>

      <S.Text>
        Lembre-se da importância de higienizar as mãos após o recebimento do
        pedido, garantindo assim sua segurança e bem-estar durante a refeição.
      </S.Text>

      <S.Text>
        Esperamos que desfrute de uma deliciosa e agradável experiência
        gastronômica. Bom apetite!
      </S.Text>
      <Button
        type="button"
        title="Clique aqui para concluir"
        onClick={onFinish}
      >
        Concluir
      </Button>
    </S.Container>
  )
}

export default SuccessContent
