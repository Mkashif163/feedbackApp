import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice({
  name: 'product',
  initialState: {
    selectedProduct: null,
  },
  reducers: {
    setSelectedProduct: (state, action) => {
      console.log("selected product in store",action.payload);
      state.selectedProduct = action.payload;
    },
  },
});

export const { setSelectedProduct } = productSlice.actions;
export const selectSelectedProduct = (state) => state.product.selectedProduct;
export default productSlice.reducer;