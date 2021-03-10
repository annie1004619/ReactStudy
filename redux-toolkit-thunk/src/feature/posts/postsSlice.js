import {
  createSlice,
  createAsyncThunk,
  isRejectedWithValue,
} from "@reduxjs/toolkit";
import axios from "axios";

export const getPosts = createAsyncThunk(
  "posts/getPosts",
  async ({ limit }, thunkAPI) => {
    try {
      const { data } = await axios.get(
        `https://jsonplaceholder.typicode.com/posts?_limit=${limit}`
      );
      return data;
    } catch (e) {
      return isRejectedWithValue({ errorMessage: "에러가 생겼습니다." });
    }
  }
);

const postsSlice = createSlice({
  name: "posts",
  initialState: {
    list: [],
    isLoading: false,
    isSuccess: false,
    isFailed: false,
  },
  extraReducers: {
    [getPosts.pending]: (state, action) => {
      state.isLoading = true;
      state.isSuccess = false;
      state.isFailed = false;
    },
    [getPosts.fulfilled]: (state, { payload }) => {
      state.list = payload;
      state.isLoading = false;
      state.isSuccess = true;
      state.isFailed = false;
    },
    [getPosts.rejected]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isFailed = true;
    },
  },
});

export default postsSlice.reducer;
