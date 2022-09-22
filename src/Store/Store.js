import { configureStore } from "@reduxjs/toolkit";
import getData from "../Slice/getData";

const store = configureStore({
  reducer: { data: getData },
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
