import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
  name: "login",
  initialState: { dropdown: false },
  reducers: {
    handalLoginDropdown: (state, action) => {
      return { dropdown: action.payload };
    },
  },
});

export default loginSlice.reducer;
export const { handalLoginDropdown } = loginSlice.actions;
