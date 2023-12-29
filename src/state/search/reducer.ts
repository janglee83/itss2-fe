import { createAsyncThunk } from "@reduxjs/toolkit";
import { search } from "utils/axiosHelper";
import { type IFilter } from "./state";

export const fetchResult = createAsyncThunk(
  "search/fetchResult",
  async (payload: unknown, { rejectWithValue }) => {
    try {
      return await search(payload as IFilter);
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  },
);
