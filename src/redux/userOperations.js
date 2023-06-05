import { createAsyncThunk } from "@reduxjs/toolkit";
import { changeUserApi, getUserApi } from "../services/mockApi";

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

export const changeUser = createAsyncThunk(
  "user/change",
  async ([id, result, flag], { rejectWithValue, dispatch }) => {
    try {
      result = flag ? result-1 : result+1;
      const data = await changeUserApi(id, result);
      return data;
    } catch (error) {
      //   dispatch(errorHandler({ error, cb: getUser }));
      return rejectWithValue(error.message);
    }
  }
);
