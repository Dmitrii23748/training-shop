import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cart/reducer';
import productsSlice from "./products/productsSlice";

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        products: productsSlice
    }
})