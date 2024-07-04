import { createSlice } from "@reduxjs/toolkit";

const baseObject = {
  theme: "false",
};

const themeSlice = createSlice({
  name: "mode",
  initialState: baseObject,
  reducers: {
    updateState: (state, action) => {
      switch (action.payload) {
        case "light":
          return { ...baseObject, theme: "light" };

        case "dark":
          return { ...baseObject, theme: "dark" };

        case "os":
          return { ...baseObject, theme: "os" };
        default:
          return state;
      }
    },
  },
});

export const { updateState } = themeSlice.actions;
export default themeSlice.reducer;
