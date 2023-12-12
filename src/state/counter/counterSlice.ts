import {
  type PayloadAction,
  createSlice,
  createAsyncThunk,
} from "@reduxjs/toolkit";

interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state: CounterState): void => {
      state.value += 1;
    },
    decrement: (state: CounterState): void => {
      state.value -= 1;
    },
    incrementByAmount: (
      state: CounterState,
      action: PayloadAction<number>,
    ): void => {
      state.value += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(incrementAsync.pending, () => {
        console.log("running");
      })
      .addCase(
        incrementAsync.fulfilled,
        (state: CounterState, action: PayloadAction<number>) => {
          state.value += action.payload;
        },
      );
  },
});

export const incrementAsync = createAsyncThunk(
  "counter/incrementAsync",
  async (amount: number) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return amount;
  },
);

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
