import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  isAuthenticated: boolean;
  token: string;
  email: string;
}
const initialState: UserState = {
  isAuthenticated: false,
  token: "",
  email: "",
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
  },
});

export const { setToken } = userSlice.actions;
export default userSlice.reducer;
