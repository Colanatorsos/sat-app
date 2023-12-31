const { createSlice } = require("@reduxjs/toolkit")

const initialState = []

const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    toggleToFavorite: (state, action) => {
      const productId = action.payload;
      const productIndex = state.findIndex(product => product.id === productId.id);

      if (productIndex !== -1) {
        state.splice(productIndex, 1);
      } else {
        state.push(action.payload);
      }
    },
  }
})


export const favoriteReducer = favoriteSlice.reducer
export const favoriteActions = favoriteSlice.actions