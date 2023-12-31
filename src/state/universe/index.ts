import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { type TSort } from "../defineInterface";
import {
  fetchListMessages,
  fetchListTag,
  fetchTopTag,
  handleLikeComment,
} from "./reducer";
import { initialState, type IUniverseState } from "./state";

const universeSlice = createSlice({
  name: "universe",
  initialState,
  reducers: {
    setIsLoading: (
      state: IUniverseState,
      action: PayloadAction<boolean>,
    ): void => {
      state.isLoading = action.payload;
    },
    setSort: (state: IUniverseState, action: PayloadAction<TSort>): void => {
      state.sort = action.payload;
    },
    setAnonymous: (
      state: IUniverseState,
      action: PayloadAction<boolean>,
    ): void => {
      state.createQuestion.anonymous = action.payload;
    },
    setEditorContent: (
      state: IUniverseState,
      action: PayloadAction<string>,
    ): void => {
      state.createQuestion.editorContent = action.payload;
    },
    setTitle: (state: IUniverseState, action: PayloadAction<string>): void => {
      state.createQuestion.title = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTopTag.fulfilled, (state: IUniverseState, action) => {
        const { payload } = action;
        state.toptags = payload;
      })
      .addCase(fetchListTag.fulfilled, (state: IUniverseState, action) => {
        const { payload } = action;
        state.listtags = payload;
      })
      .addCase(fetchListMessages.fulfilled, (state: IUniverseState, action) => {
        const { payload } = action;
        state.listMessage = payload.data.data;
      })
      .addCase(handleLikeComment.fulfilled, (state: IUniverseState, action) => {
        const { payload } = action;
        state.message = payload.message;
        toast.success(state.message);
      });
  },
});

export const {
  setIsLoading,
  setSort,
  setAnonymous,
  setEditorContent,
  setTitle,
} = universeSlice.actions;

export default universeSlice.reducer;
