export const USERS_API =
  "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json";

export const enum ROLE_TYPES {
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