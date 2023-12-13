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
export const createNewQuestion = createAsyncThunk(
  "questionDetail/createNewQuestion",
  async (payload: any, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${BE_SERVICE}/questions/create`,
        payload,
      );
      console.log("123");
      return response.data;
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  },
);
