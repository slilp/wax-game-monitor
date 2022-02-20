import { configureStore } from "@reduxjs/toolkit";
import waxSlice from "./reducer/waxSlice";
import accountSlice from "./reducer/accountSlice";

export const store = configureStore({
  reducer: {
    wax: waxSlice,
    account: accountSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
