import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API_ROUTES } from "../../app/api";

type InitialState = {
  loading: boolean;
  data: "";
  error: string;
};

const initialState: InitialState = {
  loading: false,
  data: "",
  error: "",
};

export const getToken = createAsyncThunk("login/token", async () => {
  const res = await API_ROUTES.getRequestToken();
  return res.data;
});

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {},

  extraReducers: builder => {
    builder.addCase(getToken.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = "";
    });
  },
});

export default loginSlice.reducer;
