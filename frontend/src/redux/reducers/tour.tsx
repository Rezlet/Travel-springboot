import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  tours: [],
  tour: {},
};

export const tourReducer = createReducer(initialState, {
  createTourRequest: (state: any) => {
    state.loading = true;
  },
  createTourSuccess: (state: any, action) => {
    state.loading = false;
    state.user = action.payload;
  },
  createTourFail: (state: any, action) => {
    state.loading = false;
    state.error = action.payload;
  },

  sendMailRequest: (state: any) => {
    state.loading = true;
  },
  sendMailSuccess: (state: any, action) => {
    state.loading = false;
    // state.user = action.payload;
  },
  sendMailFail: (state: any, action) => {
    state.loading = false;
    state.error = action.payload;
  },

  getAllTourRequest: (state: any) => {
    state.loading = true;
  },
  getAllTourSuccess: (state: any, action) => {
    state.loading = false;
    state.tours = action.payload;
    state.user = action.payload;
  },
  getAllTourFail: (state: any, action) => {
    state.loading = false;
    state.error = action.payload;
  },
  
  getTourByIdRequest: (state: any) => {
    state.loading = true;
  },
  getTourByIdSuccess: (state: any, action) => {
    state.loading = false;
    state.tour = action.payload;
    state.user = action.payload;
  },
  getTourByIdFail: (state: any, action) => {
    state.loading = false;
    state.error = action.payload;
  },
});
