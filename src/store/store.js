import { combineReducers, configureStore } from "@reduxjs/toolkit";
import postsReducer from "./reducers/postsSlice";

const rootReducer = combineReducers({
  postsReducer,
});

const store = configureStore({ reducer: rootReducer });

export default store;
