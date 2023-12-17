import { createSlice } from "@reduxjs/toolkit";

const initCounterState = { counter: 0, toogleCounter: false };

const counterSlice = createSlice({
  name: "counterL",
  initialState: initCounterState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    //qui accettiamo una action perchè dobbiamo passare l'ammontare dell'incremento
    increase(state, action) {
      //accediamo all'oggetto payload autogenerata dal toolkit
      state.counter = state.counter + action.payload;
    },
    toogleCounter(state) {
      state.toogleCounter = !state.toogleCounter;
    },
  },
});

export default counterSlice;
export const counterActions = counterSlice.actions;
