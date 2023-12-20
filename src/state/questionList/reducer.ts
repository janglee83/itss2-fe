import { getAllQuestionInMainPage } from "utils/axiosHelper";
import { createAsyncThunk } from "@reduxjs/toolkit";

export type TSortType = "newest" | "trending";

export const fetchListQuestion = createAsyncThunk(
  "questionList/fetch",
  async (payload: unknown, { rejectWithValue }) => {
    try {
      return await getAllQuestionInMainPage(
        payload as {
          numberOfPage: number;
          pageSize: number;
          sort: TSortType;
        },
      );
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  },
);
