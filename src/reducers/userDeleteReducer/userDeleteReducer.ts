import {
  ADD_INDICES,
  REMOVE_INDICES,
  RESET_PAGES,
  SELECT_PAGE,
  UNSELECT_PAGE,
} from "../../constants/actionTypes";
import {
  userDeleteReducerType,
  userDeleteType,
} from "./userDeleteReducer.type";

const initialState: userDeleteType = {
  indicesToDelete: [],
  pageSelected: [],
};

export const userDeleteReducer = (
  state = initialState,
  { type, indices, pageNo }: userDeleteReducerType
): userDeleteType => {
  switch (type) {
    case ADD_INDICES:
      let curIndices = state.indicesToDelete.slice(); // Copy array to new variable before modifying
      curIndices.push.apply(curIndices, indices);
      return {
        ...state,
        indicesToDelete: curIndices,
      };
    case REMOVE_INDICES:
      return {
        ...state,
        indicesToDelete: state.indicesToDelete.filter(
          (idx) => !indices.includes(idx)
        ),
      };
    case SELECT_PAGE:
      if (pageNo) {
        return { ...state, pageSelected: [...state.pageSelected, pageNo] };
      }
      return state;
    case UNSELECT_PAGE:
      if (pageNo) {
        return {
          ...state,
          pageSelected: state.pageSelected.filter((page) => page !== pageNo),
        };
      }
      return state;
    case RESET_PAGES:
      return { ...state, pageSelected: [] };
    default:
      return state;
  }
};
