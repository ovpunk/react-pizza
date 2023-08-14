import { createSlice } from "@reduxjs/toolkit";
import { initialData } from "../initialState";

export const cartSlice = createSlice({
  name: "cart",
  initialState: initialData.cart,
  reducers: {
    addPizzas(state, action) {
      const pizza = state.pizzas.find((el) => el.id === action.payload.id);
      if (pizza) {
        pizza.count++;
        state.totalPrice = state.pizzas.reduce((sum, obj) => {
          return sum + obj.price * obj.count;
        }, 0);
        return;
      }
      state.pizzas.push({ ...action.payload, count: 1 });
      state.totalPrice = state.pizzas.reduce((sum, obj) => {
        return sum + obj.price * obj.count;
      }, 0);
    },
    decrementPizza(state, action) {
      const pizza: any = state.pizzas.find((el) => el.id === action.payload);

      if (pizza) {
        pizza.count--;
        state.totalPrice = state.pizzas.reduce((sum, obj) => {
          return sum + obj.price * obj.count;
        }, 0);
      }
      //if (pizza.count === 0) {
      //  state.pizzas = state.pizzas.filter(
      //    (pizza) => pizza.id !== action.payload
      //  );
      //}
    },
    deletePizza(state, action) {
      state.pizzas = state.pizzas.filter(
        (pizza) => pizza.id !== action.payload
      );
      state.totalPrice = state.pizzas.reduce((sum, obj) => {
        return sum + obj.price * obj.count;
      }, 0);
    },
    clearCart(state) {
      state.pizzas = [];
      state.totalPrice = state.pizzas.reduce((sum, obj) => {
        return sum + obj.price * obj.count;
      }, 0);
    },
  },
});

export const { addPizzas, deletePizza, decrementPizza, clearCart } =
  cartSlice.actions;
export const cartReducer = cartSlice.reducer;
