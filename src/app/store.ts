import { configureStore } from "@reduxjs/toolkit";
import collectionReducer from "../features/collection/collectionSlice";
import profileReducer from "../features/profile/profileSlice";
import loginReducer from "../features/login/loginSlice";

const store = configureStore({
  reducer: {
    collection: collectionReducer,
    profile: profileReducer,
    login: loginReducer,
  },
});

export default store;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
