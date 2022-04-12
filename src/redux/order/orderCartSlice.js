import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const postOrderProducts = createAsyncThunk(
  "order/postOrderProducts",
  async (orderProducts, { rejectWithValue, dispatch }) => {
    try {
      const res = await axios.post("https://training.cleverland.by/shop/cart", orderProducts );
      if (res.status !== 200) {
        throw new Error("ошибка отправки city");
      }
      dispatch(setOrderMessage(res.data.message))
    //   console.log(res.data.message);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const orderCartSlice = createSlice({
  name: "order",
  initialState: {
    allOrderProducts: {
      products: [],
      deliveryMethod: "",
      paymentMethod: "",
      totalPrice: "",
      phone: "",
      email: "",
      country: "",
      cashEmail: "",
      city: "",
      street: "",
      house: "",
      apartment: "",
      postcode: "",
      storeAddress: "",
      card: "",
      cardDate: "",
      cardCVV: "",
    },
    messageOrder: "",

    status: null,
    error: null,
  },
  reducers: {
    setOrderProducts: (state, action) => {
      state.allOrderProducts.products = action.payload;
    },
    setOrderDeliveryMethod: (state, action) => {
      state.allOrderProducts.deliveryMethod = action.payload;
    },
    setOrderPaymentMethod: (state, action) => {
      state.allOrderProducts.paymentMethod = action.payload;
    },
    setOrderTotalPrice: (state, action) => {
      state.allOrderProducts.totalPrice = action.payload;
    },
    setOrderPhone: (state, action) => {
      state.allOrderProducts.phone = action.payload;
    },
    setOrderEmail: (state, action) => {
      state.allOrderProducts.email = action.payload;
    },
    setOrderCountry: (state, action) => {
      state.allOrderProducts.country = action.payload;
    },
    setOrderCashEmail: (state, action) => {
      state.allOrderProducts.cashEmail = action.payload;
    },
    setOrderCity: (state, action) => {
      state.allOrderProducts.city = action.payload;
    },
    setOrderStreet: (state, action) => {
      state.allOrderProducts.street = action.payload;
    },
    setOrderHouse: (state, action) => {
      state.allOrderProducts.house = action.payload;
    },
    setOrderApartament: (state, action) => {
      state.allOrderProducts.apartment = action.payload;
    },
    setOrderPostcode: (state, action) => {
      state.allOrderProducts.postcode = action.payload;
    },
    setOrderStoreadress: (state, action) => {
      state.allOrderProducts.storeAddress = action.payload;
    },
    setOrderCard: (state, action) => {
      state.allOrderProducts.card = action.payload;
    },
    setOrderCardDate: (state, action) => {
      state.allOrderProducts.cardDate = action.payload;
    },
    setOrderCardCvv: (state, action) => {
      state.allOrderProducts.cardCVV = action.payload;
    },
    setOrderMessage: (state, action) => {
        state.messageOrder = action.payload;
      },
  },
  extraReducers: {
    [postOrderProducts.pending]: (state) => {
      state.status = "loading";
      state.error = null;
    },
    [postOrderProducts.fulfilled]: (state, action) => {
      state.status = "resolved";
      state.allProducts = action.payload;
    },
    [postOrderProducts.rejected]: (state, action) => {
      state.status = "rejected";
      state.error = action.payload;
    },
  },
});

export const {
  setOrderProducts,
  setOrderDeliveryMethod,
  setOrderPaymentMethod,
  setOrderTotalPrice,
  setOrderPhone,
  setOrderEmail,
  setOrderCountry,
  setOrderCashEmail,
  setOrderCity,
  setOrderStreet,
  setOrderHouse,
  setOrderApartament,
  setOrderPostcode,
  setOrderStoreadress,
  setOrderCard,
  setOrderCardDate,
  setOrderCardCvv,
  setOrderMessage
} = orderCartSlice.actions;
export default orderCartSlice.reducer;
