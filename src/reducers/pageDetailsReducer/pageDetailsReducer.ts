import {
  SET_CURRENT_PAGE_NUMBER,
  SET_TOTAL_PAGE_NUMBER,
} from "../../constants/actionTypes";
import { MAX_USER_COUNT } from "../../constants/constants";
import {
  pageDetailsReducerType,
  pageDetailsType,
} from "./pageDetailsReducer.type";

const initialState: pageDetailsType = {
  curPageNum: 1,
  totalPage: 1,
  startIndex: 0,
  endIndex: MAX_USER_COUNT,
};

export const pageDetailsReducer = (
  state = initialState,
  { type, value }: pageDetailsReducerType
): pageDetailsType => {
  switch (type) {
    case SET_TOTAL_PAGE_NUMBER:
      return { ...state, totalPage: Math.ceil(value / MAX_USER_COUNT) };
    case SET_CURRENT_PAGE_NUMBER:
      return {
        ...state,
        curPageNum: value,
        startIndex: (value - 1) * MAX_USER_COUNT,
        endIndex: (value - 1) * MAX_USER_COUNT + MAX_USER_COUNT,
      };
    default:
      return state;
  }
};
