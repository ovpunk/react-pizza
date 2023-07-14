import { createSlice } from "@reduxjs/toolkit";
import { initialData } from "../initialState";

export const filterSlice = createSlice({
  name: "filter",
  initialState: initialData.filter,
  reducers: {
    changeCategory(state, action) {
      state.category = action.payload;
    },
    changeSorting(state, action) {
      state.sorting = action.payload;
    },
  },
});
export const { changeCategory, changeSorting } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
