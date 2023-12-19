import { type TSort, type ITag } from "../defineInterface";

export interface IUniverseState {
  isLoading: boolean;
  sort: TSort;
  tags: ITag[];
}

export const initialState: IUniverseState = {
  isLoading: false,
  sort: "trending",
  tags: [
    {
      id: 0,
      tagname: "",
      color: "",
      count: 0,
    },
  ],
};
