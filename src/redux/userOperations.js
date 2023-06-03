import { createAsyncThunk } from "@reduxjs/toolkit";
import { getUserApi } from "../services/mockApi";

export const getUser = createAsyncThunk(
  "user/get",
  async (_, { rejectWithValue, dispatch }) => {
    try {
        const data = await getUserApi();
      return data;
    } catch (error) {
    //   dispatch(errorHandler({ error, cb: getUser }));
      return rejectWithValue(error.message);
    }
  }
);
