import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const UsersData = createAsyncThunk(
  "data/accountholderdata",

  async () => {
    try {
      const res = await axios.get(
        "http://localhost:8080/user/getaccountholderinfo"
      );

      return res.data;
    } catch (e) {
      console.log(e);
    }
  }
);
