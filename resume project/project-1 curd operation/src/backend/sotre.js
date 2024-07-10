import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "./themeSlice";
import loginSlice from "./loginSlice";

export const store = configureStore({
  reducer: {
    login: loginSlice,
    theme: themeSlice,
  },
});
