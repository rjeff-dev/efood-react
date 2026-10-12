import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

type ProductPayload = {
  id: number
  price: number
}

type PurchasePayload = {
  products: ProductPayload[]
  delivery: {
    receiver: string
    address: {
      description: string
      city: string
      zipCode: string
      number: number
      complement: string
    }
  }
  payment: {
    card: {
      name: string
      number: string
      code: number
      expires: {
        month: number
        year: number
      }
    }
  }
}

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api-ebac.vercel.app/api/efood'
  }),
  endpoints: (builder) => ({
    getRestaurantes: builder.query<Restaurante[], void>({
      query: () => '/restaurantes'
    }),

    purchase: builder.mutation<unknown, PurchasePayload>({
      query: (body) => ({
        url: '/checkout',
        method: 'POST',
        body
      })
    })
  })
})

export const { useGetRestaurantesQuery, usePurchaseMutation } = api

export default api
