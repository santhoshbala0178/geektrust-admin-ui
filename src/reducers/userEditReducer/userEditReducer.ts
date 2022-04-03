import {
  EDIT_EMAIL,
  EDIT_NAME,
  EDIT_ROLE,
  EDIT_USER,
} from "../../constants/actionTypes";
import { ROLE_TYPES } from "../../constants/constants";
import { UserDetails } from "../userDetailsReducer/userDetailsReducer.type";
import { userEditReducerType } from "./userEditReducer.type";

const initialState: UserDetails = {
  id: "",
  name: "",
  email: "",
  role: ROLE_TYPES.MEMBER_ROLE,
};

export const userEditReducer = (
  state = initialState,
  { type, payload }: userEditReducerType
): UserDetails => {
  switch (type) {
    case EDIT_USER:
      return {
        ...state,
        ...payload.user,
      };
    case EDIT_NAME:
      if (payload.value) {
        return {
          ...state,
          name: payload?.value,
        };
      }
      return state;

    case EDIT_EMAIL:
      if (payload.value) {
        return {
          ...state,
          email: payload?.value,
        };
      }
      return state;
    case EDIT_ROLE:
      if (payload.role) {
        console.log(payload.role);
        return {
          ...state,
          role: payload?.role,
        };
      }
      return state;
    default:
      return state;
  }
};
