export const USERS_API =
  "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json";

export enum ROLE_TYPES {
  ADMIN_ROLE = "admin",
  MEMBER_ROLE = "member",
}

export const enum PAGE_NUM_TYPES {
  FIRST_PAGE = "firstPage",
  PREV_PAGE = "prevPage",
  NEXT_PAGE = "nextPage",
  LAST_PAGE = "lastPage",
  PAGE_NUM = "PageNo",
}

export const HEADER_COLUMNS = ["Name", "Email", "Role", "Actions"];

export const MAX_USER_COUNT = 10;

export const MOCK_USERS = [
  {
    name: "Mock1",
    email: "mock1@gmail.com",
    role: "admin",
    id: "1",
  },
  {
    name: "Mock2",
    email: "mock2@gmail.com",
    role: "member",
    id: "2",
  },
  {
    name: "Mock3",
    email: "mock3@gmail.com",
    role: "admin",
    id: "3",
  },
];
