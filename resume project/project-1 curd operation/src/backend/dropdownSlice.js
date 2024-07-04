import { createSlice } from "@reduxjs/toolkit";

const baseObj = {
  theme: false,
  login: false,
  mood: localStorage.getItem("mood") || "light",
};

const dropdownStatesSlice = createSlice({
  name: "dropdownStates",
  initialState: baseObj,
  reducers: {
    updateDropdown: (state, action) => {
      switch (action.payload) {
        case "theme":
          return { ...baseObj, theme: !state.theme };
        case "login":
          return { ...baseObj, login: !state.login };
        default:
          return baseObj;
      }
    },
    updateMood: (state, action) => {
      switch (action.payload) {
        case "light":
          return { ...baseObj, mood: "light" };
        case "dark":
          return { ...baseObj, mood: "dark" };
        case "os":
          return { ...baseObj, mood: "os" };
        default:
          return baseObj;
      }
    },
  },
});

export default dropdownStatesSlice.reducer;
export const { updateDropdown, updateMood } = dropdownStatesSlice.actions;
