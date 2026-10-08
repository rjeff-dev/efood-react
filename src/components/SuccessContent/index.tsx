import Button from '../Button'

import * as S from './styles'

type SuccessContentProps = {
  // Função executada ao clicar em "Concluir".
  onFinish: () => void

  // Número do pedido.
  // Por enquanto podemos deixar um valor de exemplo.
  orderId: string
}

const SuccessContent = ({ onFinish, orderId }: SuccessContentProps) => {
  return (
    <S.Container>
      {/* Título com o número do pedido */}
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

      {/*
        Finaliza o fluxo.

        Aqui o Cart pode voltar para o carrinho,
        fechar a Sidebar ou limpar o carrinho.
      */}
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
