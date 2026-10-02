import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [],
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const plant = action.payload
      const alreadyAdded = state.items.some((item) => item.id === plant.id)
      if (!alreadyAdded) {
        state.items.push({ ...plant, quantity: 1 })
      }
    },
    increaseQuantity: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload)
      if (item) {
        item.quantity += 1
      }
    },
    decreaseQuantity: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload)
      if (!item) return
      if (item.quantity > 1) {
        item.quantity -= 1
      } else {
        state.items = state.items.filter((i) => i.id !== action.payload)
      }
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
  },
})

export const {
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} = cartSlice.actions

export const selectCartItems = (state) => state.cart.items

export const selectCartCount = (state) =>
  state.cart.items.reduce((total, item) => total + item.quantity, 0)

export const selectCartTotal = (state) =>
  state.cart.items.reduce((total, item) => total + item.price * item.quantity, 0)

export default cartSlice.reducer
