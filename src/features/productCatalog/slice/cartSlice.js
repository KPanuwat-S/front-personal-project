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
      console.log("addItemToCartAsync");
      console.log("input", input);
      return input;
    } catch (err) {
      return thunkApi.rejectWithValue(err.response.data);
    }
  }
);
export const addItemToLocalStorage = createAsyncThunk(
  "cart/addItemToLocalStorage",
  async (input, thunkApi) => {
    try {
      console.log("addItemToLocalStorage");
      return input;
    } catch (err) {
      return thunkApi.rejectWithValue(err.response.data);
    }
  }
);

export const fetchItemCartFromStorage = createAsyncThunk(
  "cart/fetchItemCartFromStorage",
  async (input, thunkApi) => {
    try {
      return localStorageService.getCartItems();
    } catch (err) {
      return thunkApi.rejectWithValue(err.response.data);
    }
  }
);

export const deleteItemCart = createAsyncThunk(
  "cart/deleteItemCart",
  async (input, thunkApi) => {
    try {
      return input;
    } catch (err) {
      return thunkApi.rejectWithValue(err.response.data);
    }
  }
);

export const deleteItemFromStorage = createAsyncThunk(
  "cart/deleteItemFromStorage",
  async (input, thunkApi) => {
    try {
      return input;
    } catch (err) {
      return thunkApi.rejectWithValue(err.response.data);
    }
  }
);

export const editItemCart = createAsyncThunk(
  "cart/editItemCart",
  async (input, thunkApi) => {
    try {
      return input;
    } catch (error) {
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
        console.log("actionPayload", action.payload);
        state.cartProducts.unshift(action.payload);
        state.loading = false;
        state.hasItems = true;
      })
      .addCase(addItemToCartAsync.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(addItemToLocalStorage.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(addItemToLocalStorage.fulfilled, (state, action) => {
        localStorageService.setCartItems(state.cartProducts);
      })
      .addCase(fetchItemCartFromStorage.fulfilled, (state, action) => {
        state.cartProducts = action.payload;
      })
      .addCase(deleteItemCart.fulfilled, (state, action) => {
        const newCartItems = state.cartProducts.filter(
          (el) => el.id == action.payload
        );
        state.cartProducts = newCartItems;
      })
      .addCase(deleteItemFromStorage.fulfilled, (state, action) => {
        console.log(action.payload);
        const newCartItems = localStorageService
          .getCartItems()
          .filter((el) => el.id !== action.payload);
        // localStorageService.removeCartItems();

        localStorageService.setCartItems(newCartItems);
      })
      .addCase(editItemCart.fulfilled, (state, action) => {
        console.log("editItemCart");
        const uneditedData = localStorageService
          .getCartItems()
          .filter((el) => el.id !== action.payload.id);
        // let editCartItems = localStorageService
        //   .getCartItems()
        //   .map((el) => el.id == action.payload.id);

        const allData = { ...uneditedData, ...action.payload.data };
        localStorageService.setCartItems(allData);
      });
  },
});

export default cartSlice.reducer;
