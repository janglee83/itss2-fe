import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counter/counterSlice";
import questionDetail from "./questionDetail";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    questionDetail,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
