import { createSlice } from "@reduxjs/toolkit";
import { changeUser, getUser } from "./userOperations";

const initialState = {
  user: [],
  isLoading: false,
  error: null,
  isChnged: false,
  part: 1,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    changePart: (state, { payload }) => {
      state.part += payload;
  // const idx = state.user.findIndex(
  //       (el) => el.id === payload.payload
  //     );
  //     const follower = state.user[idx].followers;
  //     state.user[idx] =
  //       state.user[idx].isChanged === false
  //         ? {
  //             ...state.user[idx],
  //             isChanged: true,
  //             followers: follower + 1,
  //           }
  //         : {
  //             ...state.user[idx],
  //             isChanged: false,
  //             followers: follower - 1,
  //           };
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
        meta.arg === 1
          ? (state.user = pushUser)
          : state.user.push(...pushUser);
      })
      .addCase(getUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(changeUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(changeUser.fulfilled, (state, { payload, meta }) => {
        console.log("payload", payload);
        state.isLoading = false;
        state.error = null;
        state.part = meta.arg[3];
        const idx = state.user.findIndex(
          (el) => el.id === meta.arg[0]
        );
        state.user[idx] = { ...payload, isChanged: !meta.arg[2] };
      })
      .addCase(changeUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});
export const { changePart } = userSlice.actions;
export default userSlice.reducer;
