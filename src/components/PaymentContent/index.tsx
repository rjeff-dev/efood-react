import { useFormik } from 'formik'
import * as Yup from 'yup'

import Button from '../Button'

import * as S from './styles'

type PaymentContentProps = {
  onFinish: () => void
  onBack: () => void

  total: string
}

const PaymentContent = ({ onFinish, onBack, total }: PaymentContentProps) => {
  const paymentForm = useFormik({
    initialValues: {
      cardName: '',
      cardNumber: '',
      cvv: '',
      expirationMonth: '',
      expirationYear: ''
    },
    validationSchema: Yup.object({
      cardName: Yup.string().required('Campo é obrigatório'),
      cardNumber: Yup.number().required('Informe o endereço'),
      cvv: Yup.number(),
      expirationMonth: Yup.number().required('Informe o CEP'),
      expirationYear: Yup.number().required('Informe o número')
    }),
    onSubmit: (values) => {
      console.log(values)
    }
  })

  return (
    <S.Container onSubmit={paymentForm.handleSubmit}>
      <S.Title>Pagamento - Valor a pagar {total}</S.Title>

      <S.Form>
        <S.Field>
          <S.Label htmlFor="cardName">Nome no cartão</S.Label>
          <S.Input
            id="cardName"
            name="cardName"
            type="text"
            value={paymentForm.values.cardName}
            onChange={paymentForm.handleChange}
            onBlur={paymentForm.handleBlur}
          />
        </S.Field>
        <S.Row>
          <S.Field>
            <S.Label htmlFor="cardNumber">Número do cartão</S.Label>
            <S.Input
              id="cardNumber"
              name="cardNumber"
              type="text"
              value={paymentForm.values.cardNumber}
              onChange={paymentForm.handleChange}
              onBlur={paymentForm.handleBlur}
            />
          </S.Field>
          <S.SmallField>
            <S.Label htmlFor="cvv">CVV</S.Label>
            <S.Input
              id="cvv"
              name="cvv"
              type="text"
              value={paymentForm.values.cvv}
              onChange={paymentForm.handleChange}
              onBlur={paymentForm.handleBlur}
            />
          </S.SmallField>
        </S.Row>
        <S.Row>
          <S.Field>
            <S.Label htmlFor="expirationMonth">Mês de vencimento</S.Label>
            <S.Input
              id="expirationMonth"
              name="expirationMonth"
              type="text"
              value={paymentForm.values.expirationMonth}
              onChange={paymentForm.handleChange}
              onBlur={paymentForm.handleBlur}
            />
          </S.Field>
          <S.Field>
            <S.Label htmlFor="expirationYear">Ano de vencimento</S.Label>
            <S.Input
              id="expirationYear"
              name="expirationYear"
              type="text"
              value={paymentForm.values.expirationYear}
              onChange={paymentForm.handleChange}
              onBlur={paymentForm.handleBlur}
            />
          </S.Field>
        </S.Row>

        <Button
          type="button"
          title="Clique aqui para finalizar o pagamento"
          onClick={onFinish}
        >
          Finalizar pagamento
        </Button>

        {/* Voltar */}
        <Button
          type="button"
          title="Clique aqui para voltar para a edição de endereço"
          onClick={onBack}
        >
          Voltar para a edição de endereço
        </Button>
      </S.Form>
    </S.Container>
  )
}

export default PaymentContent
