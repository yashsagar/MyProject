import { configureStore } from "@reduxjs/toolkit";
import dropdownReducer from "./dropdownSlice";

export const store = configureStore({
  reducer: dropdownReducer,
});
