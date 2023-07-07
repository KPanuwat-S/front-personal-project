import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as localStorageService from "../../../utils/localStorage";
import * as cartService from "../../../api/cartApi";
const initialState = {
  cartItems: [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
  hasItems: false,
  likedProducts: [],
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
      const res = cartService.addItemToCart(input);
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

export const deleteItemCartAsync = createAsyncThunk(
  "cart/deleteItemCart",
  async (input, thunkApi) => {
    try {
      const deleted = cartService.deleteItemFromCart(input);
      return deleted;
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

// ------ Refactor
export const fetchCartItemsAsync = createAsyncThunk(
  "cart/fetchCartItemsAsync",
  async (input, thunkApi) => {
    try {
      const res = await cartService.getAllCartItems();
      console.log("res.data", res.data);
      return res.data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.response.data);
    }
  }
);

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      state.cartItems.unshift(action.payload);
    },
    removeFromCart(state, action) {
      state.cartItems = state.cartItems.filter((el) => el.id != action.payload);
    },
    editItemFromCart(state, action) {
      const newItem = action.payload.data;
      const filteredData = state.cartItems.filter(
        (el) => el.id !== action.payload.id
      );
      const newData = [...filteredData, newItem];
      state.cartItems = newData;
    },
    addToLike(state, action) {
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
      state.orderProducts = state.cartItems;
      state.cartItems = [];
      localStorageService.removeCartItems;
    },
    calPrice(state, action) {
      state.cartTotalAmount = state.cartItems.reduce((acc, el) => {
        acc += +el.price * el.quantity;
        console.log("el", el.price);
        return acc;
      }, 0);
    },
    calQuantity(state, action) {
      state.cartTotalQuantity = state.cartItems.reduce((acc, el) => {
        acc += el.quantity;
        return acc;
      }, 0);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCartItemsAsync.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchCartItemsAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.cartItems = action.payload;
      })
      .addCase(fetchCartItemsAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(addItemToCartAsync.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(addItemToCartAsync.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(deleteItemCartAsync.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(deleteItemCartAsync.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(deleteItemCartAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const {
  addToCart,
  removeFromCart,
  editItemFromCart,
  addToLike,
  removeFromLike,
  confirmCart,
  calPrice,
  calQuantity,
} = cartSlice.actions;
export default cartSlice.reducer;
