import { type TSort, type ITag, type TStatus } from "../defineInterface";
import { type IQuestion } from "../questionList/state";

export interface IFilter {
  keyword?: string;
  tags?: string[];
  status?: TStatus;
  sort?: TSort;
  page?: number;
}

export interface ISearchState {
  isLoading: boolean;
  status?: TStatus;
  sort?: TSort;
  tags?: ITag[];
  keyword?: string;
  page?: number;
  result: {
    meta?: {
      currentPage: number;
      pageSize: number;
      totalItems: number;
      totalPages: number;
    };
    data: IQuestion[];
  };
}

export const initialState: ISearchState = {
  isLoading: false,
  sort: "trending",
  status: "all",
  keyword: "",
  page: 1,
  tags: [
    {
      id: 0,
      tagname: "",
      color: "",
      count: 0,
    },
  ],
  result: {
    meta: {
      currentPage: 0,
      pageSize: 0,
      totalItems: 0,
      totalPages: 0,
    },
    data: [],
  },
};
