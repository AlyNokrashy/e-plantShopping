import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [],
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const plant = action.payload
      const alreadyAdded = state.items.some((item) => item.id === plant.id)
      if (!alreadyAdded) {
        state.items.push({ ...plant, quantity: 1 })
      }
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    updateQuantity: (state, action) => {
      const { id, amount } = action.payload
      const item = state.items.find((item) => item.id === id)
      if (!item) return

      const nextQuantity = item.quantity + amount
      if (nextQuantity < 1) {
        state.items = state.items.filter((item) => item.id !== id)
      } else {
        item.quantity = nextQuantity
      }
    },
  },
})

export const { addItem, removeItem, updateQuantity } = cartSlice.actions

export const selectCartItems = (state) => state.cart.items

export const selectCartCount = (state) =>
  state.cart.items.reduce((total, item) => total + item.quantity, 0)

export default cartSlice.reducer
