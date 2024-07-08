import { createSlice } from "@reduxjs/toolkit";
// initial state
const initialState = {
  currentUser: null,
  error: null,
  loading: false,
};

// user slice
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // sign in start state
    signInStart: (start) => {
      start.loading = true;
    },
    // sign in success state
    signInSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.loading = false;
      state.error = null;
    },
    // sign in fail state
    signInFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    // update user states
    updateUserStart: (state) => {
      state.loading = true;
    },
    updateUserSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.loading = false;
      state.error = null;
    },
    updateUserFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const {
  signInStart,
  signInSuccess,
  signInFailure,
  updateUserFailure,
  updateUserStart,
  updateUserSuccess,
} = userSlice.actions;

export default userSlice.reducer;
