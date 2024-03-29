import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "../slices/authSlice";
import profileReducer from "../slices/profileSlice";
import cartReducer from "../slices/cartSlice";

export const rootReducer = combineReducers({
    auth:authReducer,
    user:profileReducer,
    cart:cartReducer,
})