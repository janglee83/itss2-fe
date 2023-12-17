interface IAuthorDetail {
  id: number;
  fullName: string;
  email: string;
  avatarUrl: string;
}

export interface ITagDetail {
  id: number;
  tagName: string;
  color: string;
}

export interface IAnswerDetail {
  id: number;
  content: string;
  likeCount: number;
  questionId: number;
  authorDetail: IAuthorDetail;
  createAt: string;
  diem_danh_gia: number;
}

export interface IQuestionDetailState {
  id: number;
  title: string;
  content: string;
  viewCount: number;
  likeCount: number;
  createAt: string;
  updateAt: string;
  authorDetail: IAuthorDetail;
  tagsDetail: ITagDetail[];
  answersDetail: IAnswerDetail[];
}

export const initialState: IQuestionDetailState = {
  id: 0,
  title: "",
  content: "",
  viewCount: 0,
  likeCount: 0,
  createAt: "",
  updateAt: "",
  authorDetail: {
    id: 0,
    fullName: "",
    email: "",
    avatarUrl: "",
  },
  tagsDetail: [
    {
      id: 0,
      tagName: "",
      color: "",
    },
  ],
  answersDetail: [
    {
      id: 0,
      content: "",
      likeCount: 0,
      questionId: 0,
      authorDetail: {
        id: 0,
        fullName: "",
        email: "",
        avatarUrl: "",
      },
      createAt: "",
      diem_danh_gia: 0,
    },
  ],
};
