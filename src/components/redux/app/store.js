import { configureStore } from "@reduxjs/toolkit";
import CartProduct from "../feature/CartProduct";

export const store = configureStore({
  reducer: {
    cart: CartProduct
  }
},window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
