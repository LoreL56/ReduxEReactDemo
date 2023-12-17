import { configureStore } from "@reduxjs/toolkit";
import counterSlice from './counter';
import authenticationSlice from './auth';
import userProfileSlice from './user';

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    auth: authenticationSlice.reducer,
    user: userProfileSlice.reducer
  },
});

export default store;


//SEZIONE DI PROVA FATTA CON REDUX SENZA TOOLKIT
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
