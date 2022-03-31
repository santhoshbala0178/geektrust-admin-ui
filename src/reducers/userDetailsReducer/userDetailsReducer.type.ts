import { ROLE_TYPES } from "../../constants/constants";

export type UserDetails = {
  id: string;
  name: string;
  email: string;
  role: ROLE_TYPES.ADMIN_ROLE | ROLE_TYPES.MEMBER_ROLE;
};

export type UserDetailsType = {
  users: UserDetails[];
};

export type userDetailsReducerType = {
  type: string;
  payload: {
    newData?: UserDetails[];
    modifiedData?: string[];
    indicesToDelete?: string[];
  };
};
