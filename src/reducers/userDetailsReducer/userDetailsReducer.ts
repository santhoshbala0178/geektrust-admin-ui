import {
  ADD_USERS,
  DELETE_USERS,
  FILTER_USERS,
  MODIFY_USER_DATA,
} from "../../constants/actionTypes";
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
        return {
          ...state,
          users: payload.newData.map((user) => ({ ...user, display: true })),
        };
      }
      return state;
    case FILTER_USERS:
      if (payload?.filterValue !== undefined) {
        const filterVal = payload.filterValue.toLowerCase();
        return {
          ...state,
          users: state.users.map((user) => {
            if (
              user.email.toLowerCase().includes(filterVal) ||
              user.name.toLowerCase().includes(filterVal) ||
              user.role.toLowerCase().includes(filterVal)
            ) {
              return { ...user, display: true };
            } else {
              return { ...user, display: false };
            }
          }),
        };
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
    case MODIFY_USER_DATA:
      if (payload?.modifiedData) {
        return {
          ...state,
          users: [
            ...state.users.map((user) => {
              if (user.id === payload.modifiedData?.id) {
                return { ...user, ...payload.modifiedData };
              }
              return user;
            }),
          ],
        };
      }
      return state;
    default:
      return state;
  }
};
