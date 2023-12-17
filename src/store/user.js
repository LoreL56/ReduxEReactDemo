import { createSlice } from "@reduxjs/toolkit";

const initUserState = {   insertedEmail: "",insertedPassword: "",};

const userProfileSlice = createSlice({
  name: "userProfile",
  initialState: initUserState,
  reducers: {
    setEmail(state, action) {
      state.insertedEmail = action.payload;
    },
    setPassword(state, action) {
      state.insertedPassword = action.payload;
    },
    resetLogin(state){
      //state.insertedEmail = '';
      state.insertedPassword = '';
    }
  }
});

export default userProfileSlice;
export const userActions = userProfileSlice.actions;
