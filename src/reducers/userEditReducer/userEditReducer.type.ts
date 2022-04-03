import { ROLE_TYPES } from "../../constants/constants";
import { UserDetails } from "../userDetailsReducer/userDetailsReducer.type";

export type userEditReducerType = {
  type: string;
  payload: {
    user?: UserDetails;
    value?: string;
    role?: ROLE_TYPES.ADMIN_ROLE | ROLE_TYPES.MEMBER_ROLE;
  };
};
