import { createStore } from "redux";
import { configureStore, createSlice } from "@reduxjs/toolkit";

const initCounterState = { counter: 0, toogleCounter: false };
const initAuthState = {
  isAuthenticated: false,
  hasAuthenticationFailed: false,
  insertedEmail: "",
  insertedPassword: "",
};

const authenticationSlice = createSlice({
  name: "authentication",
  initialState: initAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
    authenticationFailed(state, action) {
      state.hasAuthenticationFailed = action.payload;
    },
    setEmail(state, action) {
      state.insertedEmail = action.payload;
    },
    setPassword(state, action) {
      state.insertedPassword = action.payload;
    },
    resetLogin(state){
      state.insertedEmail = '';
      state.insertedPassword = '';
    }
  },
});

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

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    auth: authenticationSlice.reducer,
  },
});

// const counterReducer = (state = { counter: 0 }, action) => {
//   if (action.type === 'increment') {
//     return {
//       counter: state.counter + 1,
//     };
//   }

//   if (action.type === 'decrement') {
//     return {
//       counter: state.counter - 1,
//     };
//   }

//   return state;
// };

// const store = createStore(counterReducer);

export default store;
export const counterActions = counterSlice.actions;
export const authActions = authenticationSlice.actions;
