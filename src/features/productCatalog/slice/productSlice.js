import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as productService from "../../../api/productApi";
import { setAccessToken } from "../../../utils/localStorage";

const initialState = {
  products: [],
  loading: false,
  details: [],
  error: null,
};

export const fetchProductAsync = createAsyncThunk(
  "product/fetchProductAsync",
  async (input, thunkApi) => {
    try {
      const res = await productService.getAllProductModel();
      return res.data.allProductModels[0];
    } catch (err) {
      return thunkApi.rejectWithValue(err.response.data.message);
    }
  }
);

export const fetchProductDetailAsync = createAsyncThunk(
  "product/fetchProductDetailAsync",
  async (input, thunkApi) => {
    try {
      const res = await productService.getAllProductDetails(input);
      console.log("test");
      return res.data.productDetail;
    } catch (err) {
      return thunkApi.rejectWithValue(err.response.data.message);
    }
  }
);

export const removeProductAsync = createAsyncThunk(
  "product/removehProductAsync",
  async (input, thunkApi) => {
    try {
      return [];
    } catch (err) {
      return thunkApi.rejectWithValue(err.response.data.message);
    }
  }
);

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProductAsync.fulfilled, (state, action) => {
        state.products.push(action.payload);
        state.loading = false;
      })
      .addCase(fetchProductAsync.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      .addCase(removeProductAsync.fulfilled, (state, action) => {
        state.products = action.payload;
      })
      .addCase(fetchProductDetailAsync.fulfilled, (state, action) => {
        state.details.push(action.payload);
        state.loading = false;
      })
      .addCase(fetchProductDetailAsync.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export default productSlice.reducer;
