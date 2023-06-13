import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as localStorageService from "../../../utils/localStorage";
const initialState = {
  cartProducts: [],
  cartOrder: {},
  loading: false,
  error: null,
  hasItems: false,
};

// export const addCartProductAsync = createAsyncThunk(
//   "cart/addCartProductAsync",
//   async (input, thunkApi) => {
//     try {
// { name, price, size, img, quantity, gender, color } = data;
//       return res.data.allProductModels;
//     } catch (err) {
//       return thunkApi.rejectWithValue(err.response.data.message);
//     }
//   }
// );
export const addItemToCartAsync = createAsyncThunk(
  "cart/addItemToCartAsync",
  async (input, thunkApi) => {
    try {
      console.log("test addItemToCartAsync");
      return input;
    } catch (err) {
      return thunkApi.rejectWithValue(err.response.data);
    }
  }
);

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addItemToCartAsync.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(addItemToCartAsync.fulfilled, (state, action) => {
        state.cartProducts.unshift(action.payload);
        state.loading = false;
        state.hasItems = true;
      })
      .addCase(addItemToCartAsync.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export default cartSlice.reducer;
