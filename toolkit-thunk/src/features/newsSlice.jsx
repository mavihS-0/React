import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchNews } from "../apiCall/app";
import { act } from "react";

const initialState = {
  newsList: [],
  loading: false,
  error: null,
};

export const getNews = createAsyncThunk("news/getNews", async () => {
  return await fetchNews();
});

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    clearNewsList: (state) => {
      state.newsList = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getNews.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getNews.fulfilled, (state, action) => {
      state.loading = false;
      state.newsList = action.payload;
    });
    builder.addCase(getNews.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export const { clearNewsList } = newsSlice.actions;
export default newsSlice.reducer;
