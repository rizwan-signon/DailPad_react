import { configureStore } from "@reduxjs/toolkit";
import DailSlice from "./features/DailSlice";

export const store = configureStore({
  reducer: {
    Dail: DailSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
