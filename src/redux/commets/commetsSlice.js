import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { getAllProducts } from "../products/productsSlice";


export const postComments = createAsyncThunk(
  "comments/postComments",
  async (dataComments, { rejectWithValue, dispatch }) => {
    try {
      const commentsData = { ...dataComments };
      const res = await axios.post(
        "https://training.cleverland.by/shop/product/review",
        commentsData
      );
      if (res.status !== 200) {
        throw new Error("ошибка отправки комментария");
      }
      dispatch(addNewRewiews(commentsData));
      dispatch(addNewRewiewsWomens(commentsData));
      dispatch(setRating(1));
      dispatch(getAllProducts())
      return res.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const commentsSlice = createSlice({
  name: "comments",
  initialState: {
    status: null,
    error: null,
    rating: 1,
    mensRewiews: [],
    womensRewiews: [],
  },
  reducers: {
    setRating: (state, action) => {
      state.rating = action.payload;
    },

    copyMensRewiews: (state, action) => {
      state.mensRewiews = [...action.payload];
    },
    addNewRewiews: (state, action) => {
      state.mensRewiews.push(action.payload);
    },

    copyRewiewsWomens: (state, action) => {
      state.womensRewiews = [...action.payload];
    },
    addNewRewiewsWomens: (state, action) => {
      state.womensRewiews.push(action.payload);
    },

    setResolved: (state, action) => {
      state.status = action.payload;
    },
  },
  extraReducers: {
    [postComments.pending]: (state) => {
      state.status = "loading";
      state.error = null;
    },
    [postComments.fulfilled]: (state) => {
      state.status = "resolved";
    },
    [postComments.rejected]: (state, action) => {
      state.status = "rejected";
      state.error = action.payload;
    },
  },
});

export const {
  setRating,
  copyMensRewiews,
  addNewRewiews,
  setResolved,
  copyRewiewsWomens,
  addNewRewiewsWomens,
} = commentsSlice.actions;
export default commentsSlice.reducer;
