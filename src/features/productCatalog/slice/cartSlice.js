import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as localStorageService from "../../../utils/localStorage";
const initialState = {
  cartProducts: localStorage.getItem("cartItems")
    ? localStorageService.getCartItems()
    : [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
  hasItems: false,
  likedProducts: localStorage.getItem("likedItems")
    ? localStorageService.getLikedItems()
    : [],
  orderProducts: [],
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
  reducers: {
    addToCart(state, action) {
      state.cartProducts.unshift(action.payload);
      localStorageService.setCartItems(state.cartProducts);
    },
    removeFromCart(state, action) {
      state.cartProducts = state.cartProducts.filter(
        (el) => el.id != action.payload
      );
      localStorageService.setCartItems(state.cartProducts);
    },
    editItemFromCart(state, action) {
      const newItem = action.payload.data;
      const filteredData = state.cartProducts.filter(
        (el) => el.id !== action.payload.id
      );
      const newData = [...filteredData, newItem];
      state.cartProducts = newData;
      localStorageService.setCartItems(state.cartProducts);
    },
    addToLike(state, action) {
      // const addProduct = state.likedProducts
      //   .unshift(action.payload)
      //   .filter((el) => el.id !== action.payload);
      // if (action.payload.id !== state.likedProducts)
      state.likedProducts.unshift(action.payload);
      localStorageService.setLikedItems(state.likedProducts);
    },
    removeFromLike(state, action) {
      state.likedProducts = state.likedProducts.filter(
        (el) => el.id != action.payload
      );
      localStorageService.setLikedItems(state.likedProducts);
    },
    confirmCart(state, action) {
      state.orderProducts = state.cartProducts;
      state.cartProducts = [];
      localStorageService.removeCartItems;
    },
  },
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(addItemToCartAsync.pending, (state, action) => {
  //       state.loading = true;
  //     })
  //     .addCase(addItemToCartAsync.fulfilled, (state, action) => {
  //       console.log("actionPayload", action.payload);
  //       state.cartProducts.unshift(action.payload);
  //       state.loading = false;
  //       state.hasItems = true;
  //     })
  //     .addCase(addItemToCartAsync.rejected, (state, action) => {
  //       state.error = action.payload;
  //     })
  //     .addCase(addItemToLocalStorage.pending, (state, action) => {
  //       state.loading = true;
  //     })
  //     .addCase(addItemToLocalStorage.fulfilled, (state, action) => {
  //       localStorageService.setCartItems(state.cartProducts);
  //     })
  //     .addCase(fetchItemCartFromStorage.fulfilled, (state, action) => {
  //       state.cartProducts = action.payload;
  //     })
  //     .addCase(deleteItemCart.fulfilled, (state, action) => {
  //       const newCartItems = state.cartProducts.filter(
  //         (el) => el.id == action.payload
  //       );
  //       state.cartProducts = newCartItems;
  //     })
  //     .addCase(deleteItemFromStorage.fulfilled, (state, action) => {
  //       console.log(action.payload);
  //       const newCartItems = localStorageService
  //         .getCartItems()
  //         .filter((el) => el.id !== action.payload);
  //       // localStorageService.removeCartItems();

  //       localStorageService.setCartItems(newCartItems);
  //     })
  //     .addCase(editItemCart.fulfilled, (state, action) => {
  //       console.log("editItemCart");
  //       const uneditedData = localStorageService
  //         .getCartItems()
  //         .filter((el) => el.id !== action.payload.id);
  //       // let editCartItems = localStorageService
  //       //   .getCartItems()
  //       //   .map((el) => el.id == action.payload.id);

  //       const allData = { ...uneditedData, ...action.payload.data };
  //       localStorageService.setCartItems(allData);
  //     });
  // },
});

export const {
  addToCart,
  removeFromCart,
  editItemFromCart,
  addToLike,
  removeFromLike,
  confirmCart,
} = cartSlice.actions;
export default cartSlice.reducer;
