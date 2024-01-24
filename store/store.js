import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../src/components/products/productSlice.js';

const store = configureStore({
  reducer: {
    product: productReducer,
  },
});

export default store;