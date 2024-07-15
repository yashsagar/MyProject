import { createSlice } from "@reduxjs/toolkit";

const checkTheme = (theme) => {
  if (theme === "os") {
    const systemTheme = matchMedia("(prefers-color-scheme : dark)").matches;
    return systemTheme ? "dark" : "light";
  } else {
    return theme;
  }
};

function updateDom(state) {
  const classlist = document.documentElement.classList;
  classlist.length ? classlist.remove([...classlist]) : "";
  classlist.add(state);
}

const loginSlice = createSlice({
  name: "theme",
  initialState: {
    dropdown: false,
    theme: "light",
    themeColor: "light",
  },
  reducers: {
    updateThemeDropdown: (state) => {
      state.dropdown = !state.dropdown;
    },
    updateTheme: (state, actions) => {
      state.themeColor = checkTheme(actions.payload);
      state.theme = actions.payload;
      updateDom(state.themeColor);
    },
  },
});

export const { updateThemeDropdown, updateTheme } = loginSlice.actions;
export default loginSlice.reducer;
