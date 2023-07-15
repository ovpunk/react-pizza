import { createSlice } from "@reduxjs/toolkit";
import { initialData } from "../initialState";

export const filterSlice = createSlice({
  name: "filter",
  initialState: initialData.filter,
  reducers: {
    changeSearchValue(state, action) {
      state.search = action.payload;
    },
    changeCategory(state, action) {
      state.category = action.payload;
    },
    changeSorting(state, action) {
      state.sorting = action.payload;
    },
    switchPagination(state, action) {
      state.pagination = action.payload;
    },
  },
});
export const {
  changeCategory,
  changeSorting,
  switchPagination,
  changeSearchValue,
} = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
