export interface IAuthor {
  id: number;
  fullname: string;
  email: string;
  gender: number;
  avatarurl: string;
  ispublic: number;
}

export interface ITag {
  id: number;
  tagname: string;
  count: number;
  color: string;
}

export interface IQuestion {
  id: number;
  title: string;
  content: string;
  isanonymous: number;
  viewcount: number;
  likecount: number;
  acceptedanswerid: number | null;
  createdat: string;
  updatedat: string;
  score: string;
  author: IAuthor;
  tags: ITag[];
  answercount: string;
}

export interface IQuestionListState {
  status: string;
  numberOfPage: string;
  pageSize: string;
  sort: string;
  questions: IQuestion[];
}

export const initialState: IQuestionListState = {
  status: "",
  numberOfPage: "",
  pageSize: "",
  sort: "",
  questions: [
    {
      id: 1,
      title: "",
      content: "",
      isanonymous: 0,
      viewcount: 0,
      likecount: 0,
      acceptedanswerid: null,
      createdat: "",
      updatedat: "",
      score: "",
      answercount: "",
      author: {
        id: 53,
        fullname: "",
        email: "",
        gender: 0,
        avatarurl: "",
        ispublic: 0,
      },
      tags: [
        {
          id: 0,
          tagname: "",
          count: 0,
          color: "",
        },
      ],
    },
  ],
};
