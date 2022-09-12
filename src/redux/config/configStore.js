import { configureStore } from "@reduxjs/toolkit";
import otherSlice from "../modules/otherSlice";

const store = configureStore({
  reducer: {
    otherSlice,
  },
});

export default store;