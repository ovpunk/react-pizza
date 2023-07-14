import { configureStore } from "@reduxjs/toolkit";
import { initialData } from "./initialState";
import { filterReducer } from "./slices/filterSlice";

export const store = configureStore({
  reducer: {
    filter: filterReducer,
  },
  preloadedState: initialData,
});
