import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllProducts = createAsyncThunk(
  "products/getAllProducts",
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.get(
        "https://training.cleverland.by/shop/products"
      );
      if (res.status !== 200) {
        throw new Error("ошибка");
      }
      return res.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const postSubscribe = createAsyncThunk(
  "subscribe/postSubscribe",
  async (email, { rejectWithValue, dispatch }) => {
    try {
      const mailData = {
        mail: email,
      };
      const res = await axios.post(
        "https://training.cleverland.by/shop/email",
        mailData
      );
      if (res.status !== 200) {
        throw new Error("ошибка отправки email");
      }
      return res.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const postSubscribeFooter = createAsyncThunk(
  "subscribeFooter/postSubscribeFooter",
  async (email, { rejectWithValue }) => {
    try {
      const mailData = {
        mail: email,
      };
      const res = await axios.post(
        "https://training.cleverland.by/shop/email",
        mailData
      );
      if (res.status !== 200) {
        throw new Error("ошибка отправки email");
      }
      return res.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
