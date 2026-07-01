import { configureStore } from "@reduxjs/toolkit";
import customerReducer from "../features/customer/customerSlice";
import authReducer from "../features/auth/authSlice";


const store = configureStore({
  reducer: {
    customer: customerReducer,
    auth: authReducer,
  },
});

export default store;