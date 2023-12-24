import { type TSort, type ITag } from "../defineInterface";

export interface ICreateQuestion {
  anonymous: boolean;
  editorContent: string;
  title: string;
}

export interface ICreateAnswer {
  anonymous: boolean;
  editorContent: string;
}

export interface IUniverseState {
  isLoading: boolean;
  sort: TSort;
  tags: ITag[];
  createQuestion: ICreateQuestion;
  createAnswer: ICreateAnswer;
}

export const initialState: IUniverseState = {
  isLoading: false,
  sort: "trending",
  createQuestion: {
    anonymous: false,
    editorContent: "",
    title: "",
  },
  createAnswer: {
    anonymous: false,
    editorContent: "",
  },
  tags: [
    {
      id: 0,
      tagname: "",
      color: "",
      count: 0,
    },
  ],
};
