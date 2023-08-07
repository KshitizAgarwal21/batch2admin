import { createSlice } from "@reduxjs/toolkit";
import { UsersData } from "./action";

const initialState = {
  userData: [],
  loading: false,
};

const UserSlice = createSlice({
  name: "User",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(UsersData.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(UsersData.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.userData = payload;
    });
  },
});

export default UserSlice.reducer;
