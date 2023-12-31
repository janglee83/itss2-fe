import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { type ITag, type TSort, type TStatus } from "../defineInterface";
import { type IAuthor } from "../questionList/state";
import { fetchResult } from "./reducer";
import { initialState, type IFilter, type ISearchState } from "./state";

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setIsLoading: (
      state: ISearchState,
      action: PayloadAction<boolean>,
    ): void => {
      state.isLoading = action.payload;
    },
    setSort: (state: ISearchState, action: PayloadAction<TSort>): void => {
      state.sort = action.payload;
    },
    setStatus: (state: ISearchState, action: PayloadAction<TStatus>): void => {
      state.status = action.payload;
    },
    setKeyword: (state: ISearchState, action: PayloadAction<string>): void => {
      state.keyword = action.payload;
    },
    setTag: (state: ISearchState, action: PayloadAction<ITag[]>): void => {
      state.tags = action.payload;
    },
    setFilter: (state: ISearchState, action: PayloadAction<IFilter>): void => {
      state.keyword = action.payload.keyword;
      state.page = action.payload.page;
      state.sort = action.payload.sort;
      state.status = action.payload.status;
      // state.tags = action.payload.tags;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      fetchResult.fulfilled,
      (state: ISearchState, action): void => {
        const { payload } = action;
        const { data } = payload;
        state.result.meta = data.meta;
        state.result.data = data.data?.map(
          (q: { author: IAuthor[]; tags: ITag[] }) => {
            return {
              ...q,
              author: q.author[0],
              tags: q.tags ?? [],
            };
          },
        );
      },
    );
  },
});

export const {
  setIsLoading,
  setSort,
  setStatus,
  setKeyword,
  setFilter,
  setTag,
} = searchSlice.actions;

export default searchSlice.reducer;
