import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { API_ROUTES, username } from "../../app/api";

type basicProp = {
  title: string;
};

type rProps = {
  id: number;
  basic_information: basicProp;
};

type Collection = {
  releases: rProps[];
};

type InitialState = {
  loading: boolean;
  data: Collection;
  error: string;
};
const initialState: InitialState = {
  loading: false,
  data: { releases: [] },
  error: "",
};

export const fetchCollection = createAsyncThunk(
  "collection/fetchCollection",
  () => {
    return API_ROUTES.getCollection(username).then(response => response.data);
  }
);

const collectionSlice = createSlice({
  name: "collection",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchCollection.pending, state => {
      state.loading = true;
    });
    builder.addCase(
      fetchCollection.fulfilled,
      (state, action: PayloadAction<Collection>) => {
        state.loading = false;
        state.data = action.payload;
        state.error = "";
      }
    );
    builder.addCase(fetchCollection.rejected, (state, action) => {
      state.loading = false;
      state.data = { releases: [] };
      state.error = action.error.message || "Something went wrong";
    });
  },
});

export default collectionSlice.reducer;
