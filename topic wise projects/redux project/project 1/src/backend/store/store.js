import { configureStore } from "@reduxjs/toolkit";
import themeSliceReducer from "./themeSlice";

const store = configureStore({
  reducer: themeSliceReducer,
});

export default store;
