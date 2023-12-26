// import { getAllQuestionInMainPage } from "utils/axiosHelper";
// import { createAsyncThunk } from "@reduxjs/toolkit";

import { getAllTags, getListMessage, likeComment } from "utils/axiosHelper";
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

export const fetchListMessages = createAsyncThunk(
  "universe/fetchListMessages",
  async (payload, { rejectWithValue }) => {
    try {
      return await getListMessage();
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  },
);

export const handleLikeComment = createAsyncThunk(
  "universe/likeComment",
  async (payload: unknown, { rejectWithValue }) => {
    try {
      return await likeComment(payload as number);
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  },
);
