import {  configureStore } from "@reduxjs/toolkit";
import { productReducer } from "./Redux/Reducers/productReducer";
import { authReducer } from "./Redux/Reducers/authReducer";

export const store=configureStore({
    reducer:{
        productReducer,
        authReducer
    }
})