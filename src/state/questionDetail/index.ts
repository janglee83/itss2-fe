import { createSlice } from "@reduxjs/toolkit";
import { type IQuestionDetailState, initialState } from "./state";
import { fetchQuestionDetail } from "./reducers";

const questionDetailSlice = createSlice({
  name: "questionDetail",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      fetchQuestionDetail.fulfilled,
      (state: IQuestionDetailState, action): void => {
        const { payload } = action;
        const {
          id,
          title,
          content,
          // isanonymous,
          viewcount,
          likecount,
          // acceptedanswerid,
          createdat,
          updatedat,
          author,
          // tags,
          // answers,
        } = payload;

        state.id = id;
        state.title = title;
        state.content = content;
        state.viewCount = viewcount;
        state.likeCount = likecount;
        state.createAt = createdat;
        state.updateAt = updatedat;

        // author
        state.authorDetail.id = author.id;
        state.authorDetail.fullName = author.fullname;
        state.authorDetail.email = author.email;
        state.authorDetail.avatarUrl = author.avatarurl;
      },
    );
  },
});

export default questionDetailSlice.reducer;
