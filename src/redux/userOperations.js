import { createAsyncThunk } from "@reduxjs/toolkit";
import { getUserApi } from "../services/mockApi";

export const getUser = createAsyncThunk(
  "user/get",
  async (page, { rejectWithValue, dispatch }) => {
    try {
        const data = await getUserApi(page);
      return data;
    } catch (error) {
    //   dispatch(errorHandler({ error, cb: getUser }));
      return rejectWithValue(error.message);
    }
  }
);
