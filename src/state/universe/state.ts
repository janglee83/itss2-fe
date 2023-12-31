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

export interface IMessageState {
  id: number;
  senderid: number;
  recipientid: number;
  relatedid: number;
  url: string | null;
  content: string;
  hasread: number;
  createdat: string;
}

export interface IUniverseState {
  isLoading: boolean;
  sort: TSort;
  listtags: ITag[];
  toptags: ITag[];
  createQuestion: ICreateQuestion;
  createAnswer: ICreateAnswer;
  listMessage: IMessageState[];
  message: string;
}

export const initialState: IUniverseState = {
  isLoading: false,
  sort: "trending",
  message: "",
  createQuestion: {
    anonymous: false,
    editorContent: "",
    title: "",
  },
  createAnswer: {
    anonymous: false,
    editorContent: "",
  },
  listMessage: [
    {
      id: 0,
      senderid: 0,
      recipientid: 0,
      relatedid: 0,
      url: null,
      content: "",
      hasread: 0,
      createdat: "",
    },
  ],
  toptags: [
    {
      id: 0,
      tagname: "",
      color: "",
      count: 0,
    },
  ],
  listtags: [
    {
      id: 0,
      tagname: "",
      color: "",
      count: 0,
    },
  ],
};
