import { ADD_INDICES, REMOVE_INDICES } from "../../constants/actionTypes";
import {
  userDeleteReducerType,
  userDeleteType,
} from "./userDeleteReducer.type";

const initialState: userDeleteType = {
  indicesToDelete: [],
};

export const userDeleteReducer = (
  state = initialState,
  { type, indices }: userDeleteReducerType
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
    default:
      return state;
  }
};
