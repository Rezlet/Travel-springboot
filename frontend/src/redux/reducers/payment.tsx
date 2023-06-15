import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  payment: {},
};

export const paymentReducer = createReducer(initialState, {
  LoadUserRequest: (state: any) => {
    state.loading = true;
  },
  LoadUserSuccess: (state: any, action) => {
    state.isAuthenticated = true;
    state.loading = false;
    state.payment = action.payload;
  },
  LoadUserFail: (state: any, action) => {
    state.loading = false;
    state.error = action.payload;
  },
});
