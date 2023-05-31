import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/user/userSlice";
import productReducer from "../features/products/productsSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    product: productReducer,
  },
});
