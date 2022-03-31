import { ADD_USERS, DELETE_USERS } from "../../constants/actionTypes";
import {
  userDetailsReducerType,
  UserDetailsType,
} from "./userDetailsReducer.type";

const initialState: UserDetailsType = {
  users: [],
};

export const userDetailsReducer = (
  state = initialState,
  { type, payload }: userDetailsReducerType
): UserDetailsType => {
  switch (type) {
    case ADD_USERS:
      if (payload?.newData) {
        return { ...state, users: payload.newData };
      }
      return state;
    case DELETE_USERS:
      if (payload?.indicesToDelete) {
        return {
          ...state,
          users: [
            ...state.users.filter(
              (user) => !payload.indicesToDelete?.includes(user.id)
            ),
          ],
        };
      }
      return state;
    default:
      return state;
  }
};
