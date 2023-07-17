import { combineReducers } from "@reduxjs/toolkit";
import productSlice from "./ProductList/slice";

export const rootReducer = combineReducers({
  ProductsList: productSlice,
});
