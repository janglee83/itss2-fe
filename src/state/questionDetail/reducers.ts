import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  acceptAnswerApi,
  createAnswer,
  createQuestion,
  questionDetail,
} from "utils/axiosHelper";

export const fetchQuestionDetail = createAsyncThunk(
  "questionDetail/fetch",
  async (questionId: number, { rejectWithValue }) => {
    try {
      return await questionDetail(questionId);
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  },
);

export const createNewQuestion = createAsyncThunk(
  "questionDetail/createQuestionDetail",
  async (payload: unknown, { rejectWithValue }) => {
    try {
      const response = await createQuestion(payload);
      console.log(response);
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  },
);

export const createNewAnswer = createAsyncThunk(
  "questionDetail/createQuestionDetail",
  async (payload: unknown, { rejectWithValue }) => {
    try {
      const response = await createAnswer(payload);
      console.log(response);
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  },
);

export const acceptAnswer = createAsyncThunk(
  "questionDetail/acceptAnswer",
  async (
    payload: {
      answerId: number;
      userId: number;
    },
    { rejectWithValue },
  ) => {
    try {
      const { answerId, userId } = payload;
      const response = await acceptAnswerApi(answerId, { userId });
      console.log(response);
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  },
);
