import { useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import Button from '../Button'
import * as S from './styles'

import { usePurchaseMutation } from '../../services/api'
import type { DeliveryValues } from '../DeliveryContent'

type ProductPayload = {
  id: number
  price: number
}

type PaymentContentProps = {
  onFinish: (orderId: string) => void
  onBack: () => void
  total: string
  delivery: DeliveryValues
  products: ProductPayload[]
}

type CheckoutResponse = {
  orderId?: string | number
  id?: string | number
  data?: {
    orderId?: string | number
    id?: string | number
  }
}

const onlyNumbers = (value: string) => value.replace(/\D/g, '')

const PaymentContent = ({
  onFinish,
  onBack,
  total,
  delivery,
  products
}: PaymentContentProps) => {
  const [purchase, { isLoading, isError }] = usePurchaseMutation()
  const [errorMessage, setErrorMessage] = useState('')

  const paymentForm = useFormik({
    initialValues: {
      cardName: '',
      cardNumber: '',
      cvv: '',
      expirationMonth: '',
      expirationYear: ''
    },

    validationSchema: Yup.object({
      cardName: Yup.string().trim().required('Informe o nome no cartão'),

      cardNumber: Yup.string()
        .required('Informe o número do cartão')
        .matches(/^\d+$/, 'Digite somente números')
        .test(
          'card-number-length',
          'Informe um número de cartão válido',
          (value) => !!value && value.length >= 13 && value.length <= 19
        ),

      cvv: Yup.string()
        .required('Informe o CVV')
        .matches(/^\d{3,4}$/, 'O CVV deve ter 3 ou 4 números'),

      expirationMonth: Yup.string()
        .required('Informe o mês de vencimento')
        .matches(/^(0?[1-9]|1[0-2])$/, 'Informe um mês válido'),

      expirationYear: Yup.string()
        .required('Informe o ano de vencimento')
        .matches(/^\d{2}$/, 'Informe o ano com dois dígitos (AA)')
    }),

    onSubmit: async (values) => {
      setErrorMessage('')

      try {
        const response = (await purchase({
          products,
          delivery: {
            receiver: delivery.fullName,
            address: {
              description: delivery.address,
              city: delivery.city,
              zipCode: delivery.zipCode,
              number: Number(delivery.number),
              complement: delivery.complement
            }
          },
          payment: {
            card: {
              name: values.cardName,
              number: values.cardNumber,
              code: Number(values.cvv),
              expires: {
                month: Number(values.expirationMonth),
                year: Number(values.expirationYear)
              }
            }
          }
        }).unwrap()) as CheckoutResponse

        const orderId =
          response.orderId ??
          response.id ??
          response.data?.orderId ??
          response.data?.id

        if (orderId === undefined || orderId === null) {
          console.error('Resposta da API checkout:', response)

          setErrorMessage(
            'A API respondeu, mas não foi possível identificar o número do pedido.'
          )
          return
        }

        onFinish(String(orderId))
      } catch (error) {
        console.error('Erro ao finalizar o pedido:', error)

        setErrorMessage(
          'Não foi possível finalizar o pedido. Confira os dados e tente novamente.'
        )
      }
    }
  })

  const getErrorMessage = (fieldName: keyof typeof paymentForm.values) => {
    const error = paymentForm.errors[fieldName]
    const touched = paymentForm.touched[fieldName]

    return touched && error ? error : ''
  }

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
            autoComplete="cc-name"
          />

          <small>{getErrorMessage('cardName')}</small>
        </S.Field>

        <S.Row>
          <S.Field>
            <S.Label htmlFor="cardNumber">Número do cartão</S.Label>

            <S.Input
              id="cardNumber"
              name="cardNumber"
              type="text"
              value={paymentForm.values.cardNumber}
              onChange={(event) => {
                const value = onlyNumbers(event.target.value).slice(0, 19)
                paymentForm.setFieldValue('cardNumber', value)
              }}
              onBlur={paymentForm.handleBlur}
              autoComplete="cc-number"
              inputMode="numeric"
              maxLength={19}
            />

            <small>{getErrorMessage('cardNumber')}</small>
          </S.Field>

          <S.SmallField>
            <S.Label htmlFor="cvv">CVV</S.Label>

            <S.Input
              id="cvv"
              name="cvv"
              type="text"
              value={paymentForm.values.cvv}
              onChange={(event) => {
                const value = onlyNumbers(event.target.value).slice(0, 4)
                paymentForm.setFieldValue('cvv', value)
              }}
              onBlur={paymentForm.handleBlur}
              autoComplete="cc-csc"
              inputMode="numeric"
              maxLength={4}
            />

            <small>{getErrorMessage('cvv')}</small>
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
              onChange={(event) => {
                const value = onlyNumbers(event.target.value).slice(0, 2)
                paymentForm.setFieldValue('expirationMonth', value)
              }}
              onBlur={paymentForm.handleBlur}
              autoComplete="cc-exp-month"
              inputMode="numeric"
              maxLength={2}
              placeholder="MM"
            />

            <small>{getErrorMessage('expirationMonth')}</small>
          </S.Field>

          <S.Field>
            <S.Label htmlFor="expirationYear">Ano de vencimento</S.Label>

            <S.Input
              id="expirationYear"
              name="expirationYear"
              type="text"
              value={paymentForm.values.expirationYear}
              onChange={(event) => {
                const value = onlyNumbers(event.target.value).slice(0, 2)
                paymentForm.setFieldValue('expirationYear', value)
              }}
              onBlur={paymentForm.handleBlur}
              autoComplete="cc-exp-year"
              inputMode="numeric"
              maxLength={2}
              placeholder="AA"
            />

            <small>{getErrorMessage('expirationYear')}</small>
          </S.Field>
        </S.Row>

        {(isError || errorMessage) && (
          <p role="alert">
            {errorMessage ||
              'Não foi possível finalizar o pedido. Tente novamente.'}
          </p>
        )}

        <Button type="submit" title="Clique aqui para finalizar o pagamento">
          {isLoading ? 'Enviando pedido...' : 'Finalizar pagamento'}
        </Button>

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
