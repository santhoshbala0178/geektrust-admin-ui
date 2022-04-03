import { ROLE_TYPES } from "../../constants/constants";

export type UserDetails = {
  id: string;
  name: string;
  email: string;
  role: ROLE_TYPES.ADMIN_ROLE | ROLE_TYPES.MEMBER_ROLE;
};

export type UserDetailsWithDisplay = UserDetails & {
  display: boolean;
};
export type UserDetailsType = {
  users: UserDetailsWithDisplay[];
};

export type userDetailsReducerType = {
  type: string;
  payload: {
    newData?: UserDetailsWithDisplay[];
    modifiedData?: Partial<UserDetails>;
    indicesToDelete?: string[];
    filterValue?: string;
  };
};
