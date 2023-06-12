import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/slice/authSlice";
import productReducer from "../features/productCatalog/slice/productSlice";
export default configureStore({
  reducer: {
    auth: authReducer,
    product: productReducer,
  },
});
