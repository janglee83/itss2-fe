export interface ITag {
  id: number;
  tagname: string;
  count?: number;
  color: string;
}

export type TSort = "trending" | "newest";
export type TStatus = "all" | "solved" | "not resolved";
