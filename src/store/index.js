import { combineReducers } from "redux";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import wordReducer from "./words";
import userReducer from "./user";

const reducer = combineReducers({
  // words: wordReducer,
  user: userReducer,
});

export const store = configureStore({
  reducer,
  middleware: [
    ...getDefaultMiddleware({
      serializableCheck: false,
    }),
  ],
});
