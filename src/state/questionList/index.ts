import { createSlice } from "@reduxjs/toolkit";
import { type IQuestionListState, initialState } from "./state";
import { fetchListQuestion } from "./reducer";

const questionListSlice = createSlice({
  name: "questionList",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      fetchListQuestion.fulfilled,
      (state: IQuestionListState, action): IQuestionListState => {
        const { payload } = action;
        return payload as IQuestionListState;
      },
    );
  },
});

export default questionListSlice.reducer;
