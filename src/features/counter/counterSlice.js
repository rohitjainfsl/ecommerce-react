import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: function (state) {
      state.value = state.value + 1;
    },
    decrement: function (state) {
      state.value = state.value - 1;
    },
    incrementByValue: function (state, action) {
      state.value = state.value + action.payload;
    },
  },
});

export const { increment, decrement, incrementByValue } = counterSlice.actions;

export default counterSlice.reducer
