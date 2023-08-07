import { combineReducers } from "@reduxjs/toolkit";
import productSlice from "./ProductList/slice";
import UserSlice from "./GetAccountHolder/slice";

export const rootReducer = combineReducers({
  UsersData: UserSlice,
  ProductsList: productSlice,
});
