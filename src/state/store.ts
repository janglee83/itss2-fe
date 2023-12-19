import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counter/counterSlice";
import questionDetail from "./questionDetail";
import questionList from "./questionList";
import universe from "./universe";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    questionDetail,
    questionList,
    universe,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
