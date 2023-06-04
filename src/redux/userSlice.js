import { createSlice } from "@reduxjs/toolkit";
import { getUser } from "./userOperations";

const initialState = {
  user: [],
  isLoading: false,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    changeUser: (state, { payload }) => {
      const idx = state.user.findIndex(
        (el) => el.id === payload.payload
      );
      const follower = state.user[idx].followers;
      state.user[idx] =
        state.user[idx].isChanged === false
          ? {
              ...state.user[idx],
              isChanged: true,
              followers: follower + 1,
            }
          : {
              ...state.user[idx],
              isChanged: false,
              followers: follower - 1,
            };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUser.fulfilled, (state, { payload, meta }) => {
        state.isLoading = false;
        state.error = null;
        const pushUser = payload.map((el) => ({
          ...el,
          isChanged: false,
        }));
        console.log("render");
        meta.arg === 1
          ? (state.user = pushUser)
          : state.user.push(...pushUser);
      })
      .addCase(getUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});
export const { changeUser, changePage } = userSlice.actions;
export default userSlice.reducer;
