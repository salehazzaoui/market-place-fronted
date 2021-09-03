import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../features/products/productSlice";
import cartReducer from "../features/cart/cartSlice";
import sidebarReducer from "../features/sidebar/sidebarSlice";

export const store = configureStore({
  reducer: {
    product: productReducer,
    sidebar: sidebarReducer,
    cart: cartReducer,
  },
});
//store.subscribe(() => console.log(store.getState()));
