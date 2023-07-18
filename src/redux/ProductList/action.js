import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const ProductsList = createAsyncThunk("data/ProductList", async () => {
  try {
    const result = await axios.post(
      "http://localhost:8080/products/getproductlist"
    );

    return result.data;
  } catch (e) {
    console.log(e);
  }
});
