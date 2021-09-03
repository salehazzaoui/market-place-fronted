import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

let initialState = {
  products: [],
  loading: false,
};

export const productsAsync = createAsyncThunk(
  "product/fetchProducts",
  async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const products = await response.json();
    // The value we return becomes the `fulfilled` action payload
    return products;
  }
);

export const productSlice = createSlice({
  name: "product",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(productsAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(productsAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      });
  },
});

export default productSlice.reducer;
