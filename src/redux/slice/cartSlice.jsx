const { createSlice } = require("@reduxjs/toolkit");


const initialState = []

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingProductIndex = state.findIndex(p => p.id === action.payload.id);

      if (existingProductIndex !== -1) {
        state[existingProductIndex].quantity += 1;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      const existingProductIndex = state.findIndex(p => p.id === action.payload.id);

      if (existingProductIndex !== -1) {
        if (state[existingProductIndex].quantity > 1) {
          state[existingProductIndex].quantity -= 1;
        } else {
          state.splice(existingProductIndex, 1);
        }
      }
    }
  },
  incrementQuantity: (state, action) => {
      const existingProduct = state.find(p => p.id === action.payload.id);

      if (existingProduct) {
        existingProduct.quantity += 1;
      }
    },
})

export const cartReducer = cartSlice.reducer
export const cartActions = cartSlice.actions