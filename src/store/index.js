import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/slice/authSlice";
export default configureStore({
  reducer: {
    auth: authReducer,
  },
});
