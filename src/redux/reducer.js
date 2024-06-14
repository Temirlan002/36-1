import { combineReducers } from "redux";
import mainReducer from './mainPageReducer';
import usersReducer from "./usersReducer";

export const rootReducer = combineReducers({
    mainReducer,
    usersReducer
})