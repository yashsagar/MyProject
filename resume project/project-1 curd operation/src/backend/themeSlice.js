import { createSlice } from "@reduxjs/toolkit";

function themeColor(theme) {
  if (theme === "os") {
    if (matchMedia("(prefers-color-scheme:dark)").matches) {
      return "dark";
    } else {
      return "light";
    }
  } else {
    return theme;
  }
}

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    dropdown: false,
    theme: "light",
    themeColor: "light",
  },
  reducers: {
    handalThemeDropdown: (state, action) => {
      state.dropdown = action.payload;
    },
    handalTheme: (state, action) => {
      state.theme = action.payload;
      state.themeColor = themeColor(action.payload);
    },
  },
});

export default themeSlice.reducer;
export const { handalThemeDropdown, handalTheme } = themeSlice.actions;
