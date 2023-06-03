import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: [
    {
      user: "Tommy Beier",
      tweets: 43792,
      followers: 35050,
      avatar:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/75.jpg",
      id: "1",
      isChanged: false,
    },
    {
      user: "Ramona O'Reilly",
      tweets: 83666,
      followers: 44440,
      avatar:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1186.jpg",
      id: "2",
      isChanged: false,
    },
    {
      user: "Candace Parker",
      tweets: 333,
      followers: 39930,
      avatar:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1159.jpg",
      id: "3",
      isChanged: false,
    },
  ],

  error: null,
};

const userSlice = createSlice(
  {
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
  },
  (builder) => {
    builder.addCase();
  }
);
export const { changeUser } = userSlice.actions;
export default userSlice.reducer;
