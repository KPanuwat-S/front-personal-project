import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as authService from "../../../api/authApi";
import { setAccessToken, removeAccessToken } from "../../../utils/localStorage";
import { useNavigate } from "react-router-dom";
const initialState = {
  isAuthenticated: false,
  error: null,
  loading: false,
  user: null,
  initial: true,
  address: null,
  newUser: null,
};

export const registerAsync = createAsyncThunk(
  "auth/registerAsync",
  async (input, thunkApi) => {
    try {
      const res = await authService.register(input);
      setAccessToken(res.data.accessToken);
      const restFetchMe = await authService.fetchMe();
      return restFetchMe.data.user;
    } catch (err) {
      return thunkApi.rejectWithValue(err.response.data.message);
    }
  }
);

export const createAdress = createAsyncThunk(
  "auth/createAdress",
  async (input, thunkApi) => {
    try {
      const res = await authService.createAdress;
    } catch (err) {
      err;
    }
  }
);

export const loginAsync = createAsyncThunk(
  "auth/loginAsync",
  async (input, thunkApi) => {
    try {
      const res = await authService.login(input);
      setAccessToken(res.data.accessToken);
      console.log("res", res.data.accessToken);
      const resFetchMe = await authService.fetchMe();
      return resFetchMe.data.user;
    } catch (err) {
      console.log("login Async");
      return thunkApi.rejectWithValue(err.response.data.message);
    }
  }
);

export const fetchMe = createAsyncThunk("auth/fetchMe", async (_, thunkApi) => {
  try {
    const res = await authService.fetchMe();
    return res.data.user;
  } catch (err) {
    return thunkApi.rejectWithValue(err.response.data.message);
  }
});

export const getAddressAsync = createAsyncThunk(
  "auth/getAddressAsync",
  async (_, thunkApi) => {
    try {
      const res = await authService.getAddress();
      return res.data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.response.data.message);
    }
  }
);

export const logout = createAsyncThunk("auth/logout", async () => {
  // const navigate = useNavigate();
  removeAccessToken();
  // navigate("/authenticate");
});

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    redirectTo: (state, action) => {
      state.location = action.payload;
    },
    getNewUserInfo: (state, action) => {
      state.newUser = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(logout.fulfilled, (state) => {
        state.isAuthenticated = false;
        state.user = null;
      })
      .addCase(registerAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(registerAsync.fulfilled, (state, action) => {
        state.isAuthenticated = true;
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(registerAsync.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      .addCase(loginAsync.fulfilled, (state, action) => {
        state.isAuthenticated = true;
        state.user = action.payload;
      })
      .addCase(loginAsync.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(fetchMe.fulfilled, (state, action) => {
        state.isAuthenticated = true;
        state.user = action.payload;
        state.initialLoading = false;
      })
      .addCase(fetchMe.rejected, (state, action) => {
        state.error = action.payload;
        state.initialLoading = false;
      })
      .addCase(fetchMe.pending, (state) => {
        state.initialLoading = true;
      })
      .addCase(getAddressAsync.fulfilled, (state, action) => {
        state.address = action.payload;
      });
  },
});

export const { redirectTo, getNewUserInfo } = authSlice.actions;
export default authSlice.reducer;
