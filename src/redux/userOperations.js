import { createAsyncThunk } from "@reduxjs/toolkit";
import { changeUserApi, getUserApi } from "../services/mockApi";

export const getUser = createAsyncThunk(
  "user/get",
  async (page, { rejectWithValue }) => {
    try {
      const data = await getUserApi(page);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const changeUser = createAsyncThunk(
  "user/change",
  async ([id, result, flag], { rejectWithValue }) => {
    try {
      result = flag ? result - 1 : result + 1;
      const data = await changeUserApi(id, result);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
