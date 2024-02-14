import { configureStore } from "@reduxjs/toolkit";
import {rootReducer} from '../redux/combineRedux';

export const store = configureStore({
    reducer: rootReducer
})