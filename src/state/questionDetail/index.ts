import { createSlice } from "@reduxjs/toolkit";
import {
  type IQuestionDetailState,
  initialState,
  type ITagDetail,
  type IAnswerDetail,
} from "./state";
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
          tags,
          answers,
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

        // tags
        state.tagsDetail = tags.map(
          (item: {
            id: number;
            tagname: string;
            color: string;
          }): ITagDetail => {
            return {
              id: item.id,
              tagName: item.tagname,
              color: item.color,
            };
          },
        );

        // answer
        state.answersDetail = answers.map(
          (item: {
            id: number;
            content: string;
            likecount: number;
            questionid: number;
            user: {
              id: number;
              fullname: string;
              email: string;
              avatarurl: string;
            };
            createdat: string;
            diem_danh_gia: number;
          }): IAnswerDetail => {
            return {
              id: item.id,
              content: item.content,
              likeCount: item.likecount,
              questionId: item.questionid,
              authorDetail: {
                id: item.user.id,
                fullName: item.user.fullname,
                email: item.user.email,
                avatarUrl: item.user.avatarurl,
              },
              createAt: item.createdat,
              diem_danh_gia: item.diem_danh_gia,
            };
          },
        );
      },
    );
    // .addCase(
    //   createNewQuestion.fulfilled,
    //   (state: IQuestionDetailState, action): void => {
    //     // Handle success if needed
    //     console.log("New question created:", action.payload);
    //   },
    // );
  },
});

export default questionDetailSlice.reducer;
