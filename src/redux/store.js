import { configureStore } from "@reduxjs/toolkit";
import { initialData } from "./initialState";
import { filterReducer } from "./slices/filterSlice";
import { cartReducer } from "./slices/cartSlice";

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    cart: cartReducer,
  },
  preloadedState: initialData,
});
