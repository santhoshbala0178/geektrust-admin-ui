export type userDeleteType = {
  indicesToDelete: string[];
  pageSelected: number[];
};

export type userDeleteReducerType = {
  type: string;
  indices: string[];
  pageNo?: number;
};
