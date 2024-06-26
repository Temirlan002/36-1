import { configureStore } from "@reduxjs/toolkit";
import postsReducer from './PostsSlice'
import logger from "redux-logger";

export const store = configureStore({
    reducer: {
        postsReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})