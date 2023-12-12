import { BE_SERVICE } from "data/constants";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchQuestionDetail = createAsyncThunk(
  "questionDetail/fetch",
  async (questionId: number, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${BE_SERVICE}/question/${questionId}`);
      return response.data;
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  },
);
