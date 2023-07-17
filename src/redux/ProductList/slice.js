import { createSlice } from "@reduxjs/toolkit";

import { ProductsList } from "./action";

const initialState = {
  products: [],
  loading: false,
};

const productSlice = createSlice({
  name: "Products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(ProductsList.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(ProductsList.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.products = payload;
    });
  },
});

export default productSlice.reducer;
