import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { API_ROUTES } from "../../app/api";

type Tokens = {
  oauth_token?: string;
};

type InitialState = {
  loading: boolean;
  data: Tokens;
  error: string;
};

const initialState: InitialState = {
  loading: false,
  data: { oauth_token: "" },
  error: "",
};

export const getToken = createAsyncThunk("login/token", async () => {
  const { data } = await API_ROUTES.getRequestToken();

  const tokens = data.split("&");

  const myObj: { [index: string]: string } = {};
  Object.entries(tokens).forEach(([_, value]: any) => {
    const splittedValue = value.split("=");
    myObj[splittedValue[0]] = splittedValue[1];
  });

  return myObj;
});

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {},

  extraReducers: builder => {
    builder.addCase(getToken.pending, state => {
      state.loading = true;
    });

    builder.addCase(
      getToken.fulfilled,
      (state, action: PayloadAction<Tokens>) => {
        state.loading = false;
        state.data = action.payload;
        state.error = "";
      }
    );

    builder.addCase(getToken.rejected, (state, action) => {
      state.loading = false;
      state.data = { oauth_token: "" };
      state.error = action.error.message || "Something went wrong";
    });
  },
});

export default loginSlice.reducer;
