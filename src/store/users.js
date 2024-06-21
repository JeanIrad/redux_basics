import { createSlice } from "@reduxjs/toolkit";
let id = 0;
const slice = createSlice({
  name: "users",
  initialState: [],
  reducers: {
    userAdded: (uers, action) => {
      uers.push({
        id: ++id,
        name: action.payload.name,
      });
    },
  },
});

export default slice.reducer;

export const { userAdded } = slice.actions;
