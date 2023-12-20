// import { getAllQuestionInMainPage } from "utils/axiosHelper";
// import { createAsyncThunk } from "@reduxjs/toolkit";

import { getAllTags } from "utils/axiosHelper";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchListTag = createAsyncThunk(
  "universe/fetchListTags",
  async (payload, { rejectWithValue }) => {
    try {
      return await getAllTags();
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  },
);
