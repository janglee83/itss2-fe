import { type PayloadAction, createSlice } from "@reduxjs/toolkit";
import { type IUniverseState, initialState } from "./state";
import { fetchListMessages, fetchListTag, handleLikeComment } from "./reducer";
import { type TSort } from "../defineInterface";
import { toast } from "react-toastify";

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
      .addCase(fetchListTag.fulfilled, (state: IUniverseState, action) => {
        const { payload } = action;
        state.tags = payload;
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
