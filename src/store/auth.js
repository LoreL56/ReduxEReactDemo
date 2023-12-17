import { createSlice } from "@reduxjs/toolkit";

const initAuthState = {
  isAuthenticated: false,
  hasAuthenticationFailed: false
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
  },
});

export default authenticationSlice;
export const authActions = authenticationSlice.actions;
