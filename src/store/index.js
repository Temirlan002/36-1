import { configureStore } from "@reduxjs/toolkit";
// import postsReducer from './PostsSlice';
import aboutReducer from './AboutSlice'
import logger from "redux-logger";

export const store = configureStore({
    reducer: {
        // postsReducer,
        aboutReducer
    },
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})