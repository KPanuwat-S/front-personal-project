import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as productService from "../../../api/productApi";
import * as localStorageService from "../../../utils/localStorage";

const initialState = {
  products: [],
  loading: false,
  details: [],
  selectedItem: {},
  error: null,
  maleProducts: [],
  femaleProducts: [],
};

export const fetchProductAsync = createAsyncThunk(
  "product/fetchProductAsync",
  async (input, thunkApi) => {
    try {
      const res = await productService.getAllProductModel();
      return res.data.allProductModels;
    } catch (err) {
      return thunkApi.rejectWithValue(err.response.data.message);
    }
  }
);

export const fetchProductByGenderAsync = createAsyncThunk(
  "product/fetchProductByGenderAsync",
  async (input, thunkApi) => {
    try {
      const res = await productService.getGenderedProduct(input);
      return res.data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.response.data.message);
    }
  }
);
export const fetchProductByGenderWithQueryAsync = createAsyncThunk(
  "product/fetchProductByGenderWithQueryAsync",
  async (input, thunkApi) => {
    try {
      console.log("input", input);
      const res = await productService.getGenderedProductQuery(
        input.genderId,
        input.query
      );
      return res.data;
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
      console.log("res", res.data.productDetail);
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
export const removeProductDetailAsync = createAsyncThunk(
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
        state.products.push(action.payload) ?? [];
        state.loading = false;
      })
      .addCase(fetchProductAsync.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      .addCase(fetchProductByGenderAsync.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchProductByGenderAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.maleProducts = action.payload ?? [];
      })
      .addCase(fetchProductByGenderAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchProductByGenderWithQueryAsync.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(
        fetchProductByGenderWithQueryAsync.fulfilled,
        (state, action) => {
          state.loading = false;
          state.maleProducts = action.payload ?? [];
        }
      )
      .addCase(fetchProductByGenderWithQueryAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(removeProductAsync.fulfilled, (state, action) => {
        state.products = [];
        state.maleProducts = [];
        state.femaleProducts = [];
        state.details = [];
      })
      .addCase(fetchProductDetailAsync.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchProductDetailAsync.fulfilled, (state, action) => {
        state.details = [];
        state.details = action.payload;
        state.loading = false;
      })
      .addCase(fetchProductDetailAsync.rejected, (state, action) => {
        state.error = action.payload;
      });
    // .addCase(removeProductDetailAsync.fulfilled, (state, action) => {
    //   state.details = action.payload;
    // });
  },
});

export default productSlice.reducer;
