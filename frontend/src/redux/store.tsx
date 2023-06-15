import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./reducers/users.tsx";
import { paymentReducer } from "./reducers/payment.tsx";
import { tourReducer } from "./reducers/tour.tsx";

const Store = configureStore({
  reducer: {
    user: userReducer,
    payment: paymentReducer,
    tour: tourReducer
  },
});

export default Store;
