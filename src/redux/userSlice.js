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
    },
    {
      user: "Ramona O'Reilly",
      tweets: 83666,
      followers: 44440,
      avatar:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1186.jpg",
      id: "2",
    },
    {
      user: "Candace Parker",
      tweets: 333,
      followers: 39930,
      avatar:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1159.jpg",
      id: "3",
    },
  ],
  isClicked: false,
  error: null,
};

const userSlice = createSlice({
    name:'user',
    initialState
},
    (builder) => {
    builder
    .addCase()
    }
)

export default userSlice.reducer;
