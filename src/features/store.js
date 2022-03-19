import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import fundsReducer from "./fundsSlice";

export const store = configureStore({
  reducer: { users: userReducer, funds: fundsReducer },
});
