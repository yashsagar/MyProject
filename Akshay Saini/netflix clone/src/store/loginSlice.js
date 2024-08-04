import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
  name: "login",
  initialState: {
    loginState: false,
  },
  reducers: {
    loginState: (state, action) => {
      state.loginState = action.payload.load;
    },
  },
});

export const { loginState } = loginSlice.actions;
export default loginSlice.reducer;
