import { combineReducers, configureStore } from "@reduxjs/toolkit";
import postsReducer from "./reducers/postsSlice";
import postReducer from "./reducers/postDetSlice";

const rootReducer = combineReducers({
  postsReducer,
  postReducer,
});

const store = configureStore({ reducer: rootReducer });

export default store;
