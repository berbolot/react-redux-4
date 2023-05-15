import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  post: [],
  error: "",
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setLoadingPost: (state, action) => {
      state.loading = action.payload;
      state.error = "";
    },
    setErrorPost: (state, action) => {
      state.error = action.payload;
      state.loading = false;
      state.post = [];
    },
    setPost: (state, action) => {
      state.error = "";
      state.loading = false;
      state.post = action.payload;
    },
  },
});

const postReducer = postsSlice.reducer;

export const { setErrorPost, setLoadingPost, setPost } = postsSlice.actions;
export default postReducer;
