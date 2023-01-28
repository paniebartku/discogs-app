import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { API_ROUTES, username } from "../../app/api";

type Profile = {
  username: string;
};

type InitialState = {
  loading: boolean;
  data: Profile;
  error: string;
};
const initialState: InitialState = {
  loading: false,
  data: { username },
  error: "",
};

export const fetchProfile = createAsyncThunk("profile/fetchProfile", () => {
  return API_ROUTES.getProfile(username).then(response => response.data);
});

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchProfile.pending, state => {
      state.loading = true;
    });
    builder.addCase(
      fetchProfile.fulfilled,
      (state, action: PayloadAction<Profile>) => {
        state.loading = false;
        state.data = action.payload;
        state.error = "";
      }
    );
    builder.addCase(fetchProfile.rejected, (state, action) => {
      state.loading = false;
      state.data = { username: "" };
      state.error = action.error.message || "Something went wrong";
    });
  },
});

export default profileSlice.reducer;
