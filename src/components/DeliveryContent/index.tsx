import { useFormik } from 'formik'
import Button from '../Button'

import * as S from './styles'

import * as Yup from 'yup'

type DeliveryContentProps = {
  onContinue: () => void
  onBack: () => void
}

const DeliveryContent = ({ onContinue, onBack }: DeliveryContentProps) => {
  const form = useFormik({
    initialValues: {
      fullName: '',
      address: '',
      city: '',
      zipCode: '',
      number: '',
      complement: ''
    },
    validationSchema: Yup.object({
      fullName: Yup.string().required('Campo é obrigatório'),
      address: Yup.string().required('Informe o endereço'),
      city: Yup.string(),
      zipCode: Yup.string().required('Informe o CEP'),
      number: Yup.string().required('Informe o número')
    }),
    onSubmit: (values) => {
      console.log(values)
    }
  })

  return (
    <S.Container onSubmit={form.handleSubmit}>
      {/* Título da etapa */}
      <S.Title>Entrega</S.Title>

      <S.Form>
        {/* Quem irá receber */}
        <S.Field>
          <S.Label htmlFor="fullName">Quem irá receber</S.Label>
          <S.Input
            id="fullName"
            name="fullName"
            type="text"
            value={form.values.fullName}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
          />
        </S.Field>

        {/* Endereço */}
        <S.Field>
          <S.Label htmlFor="address">Endereço</S.Label>
          <S.Input
            id="address"
            name="address"
            type="text"
            value={form.values.address}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
          />
        </S.Field>

        {/* Cidade */}
        <S.Field>
          <S.Label htmlFor="city">Cidade</S.Label>

          <S.Input
            id="city"
            name="city"
            type="text"
            value={form.values.city}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
          />
        </S.Field>

        {/* CEP + Número */}
        <S.Row>
          <S.Field>
            <S.Label htmlFor="zipCode">CEP</S.Label>

            <S.Input
              id="zipCode"
              name="zipCode"
              type="text"
              value={form.values.zipCode}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
          </S.Field>

          <S.Field>
            <S.Label htmlFor="number">Número</S.Label>

            <S.Input
              id="number"
              name="number"
              type="text"
              value={form.values.number}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
          </S.Field>
        </S.Row>

        {/* Complemento */}
        <S.Field>
          <S.Label htmlFor="complement">Complemento (opcional)</S.Label>
          <S.Input
            id="complement"
            name="complement"
            type="text"
            value={form.values.complement}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
          />
        </S.Field>

        <Button
          type="button"
          title="Clique aqui para continuar com o pagamento"
          onClick={onContinue}
        >
          Continuar com o pagamento
        </Button>

        <Button
          type="button"
          title="Clique aqui para voltar ao carrinho"
          onClick={onBack}
        >
          Voltar para o carrinho
        </Button>
      </S.Form>
    </S.Container>
  )
}

export default DeliveryContent
