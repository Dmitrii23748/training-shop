import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cart/reducer';
import productsSlice from "./products/productsSlice";
import subscribeSlice from "./subscribe/subscribeSlice";
import subscribeFooterSlice from "./subscribeFooter/subscribeFooterSlice";
import commetsSlice from "./commets/commetsSlice";

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        products: productsSlice,
        subscribe: subscribeSlice,
        subscribeFooter: subscribeFooterSlice,
        comments: commetsSlice
    }
})