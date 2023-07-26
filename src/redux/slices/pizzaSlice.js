import { createSlice } from "@reduxjs/toolkit";
import { initialData } from "../initialState";

export const pizzaSlice = createSlice({
  name: "pizza",
  initialState: initialData.pizza,
  reducers: {},
});
