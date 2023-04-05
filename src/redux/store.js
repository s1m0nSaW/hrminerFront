import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./slices/auth.js";
import personSlice from "./slices/person.js";

export const store = configureStore({
    reducer:{
        person: personSlice,
        auth: authReducer,
    },
});
