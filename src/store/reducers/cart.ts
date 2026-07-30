import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Product } from '../../pages/Home'

type CartState = {
  items: Product[]
}

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: []
  },
  reducers: {
    add: (state, action: PayloadAction<Product>) => {
      state.items.push(action.payload)
    }
  }
})
