import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "../feature/posts/postsSlice";

export default configureStore({
  reducer: {
    posts: postsReducer,
  },
});
