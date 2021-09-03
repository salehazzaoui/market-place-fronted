import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  products: [],
  total: null,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addProduct: (state, action) => {
      state.products = [...state.products, action.payload];
    },
    removeProduct: (state, action) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload
      );
    },
    deleteAll: (state, action) => {
      state.products = state.products.splice(0, action.payload);
    },
  },
});

export const { addProduct, removeProduct } = cartSlice.actions;

export const selectTotal = (state) =>
  state.cart.products.reduce((total, product) => total + product.price, 0);

export default cartSlice.reducer;
