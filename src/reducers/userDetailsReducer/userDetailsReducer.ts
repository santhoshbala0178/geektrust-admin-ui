import { ADD_USERS } from "../../constants/actionTypes";
import { UserDetails, userDetailsReducerType } from "./userDetailsReducer.type";

const initialState: UserDetails[] = [];

export const userDetailsReducer = (
  state = initialState,
  { type, payload }: userDetailsReducerType
): UserDetails[] => {
  switch (type) {
    case ADD_USERS:
      if (payload?.newData) {
        return [...payload.newData];
      } else {
        return state;
      }
    default:
      return state;
  }
};
