import { Dispatch } from "react";
import { Action } from "redux";
import * as types from "../constants/actionTypes";
import { ROLE_TYPES } from "../constants/constants";
import { UserDetails } from "../reducers/userDetailsReducer/userDetailsReducer.type";

export const setUsers = (users: UserDetails[]) => ({
  type: types.ADD_USERS,
  payload: {
    newData: users,
  },
});

export const deleteUsers = (indicesToDelete: string[]) => ({
  type: types.DELETE_USERS,
  payload: {
    indicesToDelete,
  },
});

export const saveEditedData = (type: string, value: string) => ({
  type,
  payload: {
    value,
  },
});

export const saveEditedRole = (role: ROLE_TYPES) => ({
  type: types.EDIT_ROLE,
  payload: {
    role,
  },
});

export const editUser = (payload: UserDetails) => ({
  type: types.EDIT_USER,
  payload: {
    user: payload,
  },
});

export const modifyUserData = (payload: Partial<UserDetails>) => ({
  type: types.MODIFY_USER_DATA,
  payload: {
    modifiedData: payload,
  },
});

export const filterAndSetPage =
  (filterValue: string) => (dispatch: Dispatch<Action>, getState: any) => {
    dispatch(filterUsers(filterValue));
    const numOfUsers = getState().userDetailsReducer.users.filter(
      (user: any) => user.display
    ).length;
    dispatch(setTotalPages(numOfUsers)); // Set number of users based on search text
    dispatch(setCurrentPage(1)); // Reset the page number to first page
  };

export const filterUsers = (filterValue: string) => ({
  type: types.FILTER_USERS,
  payload: {
    filterValue,
  },
});

export const setTotalPages = (value: number) => ({
  type: types.SET_TOTAL_PAGE_NUMBER,
  value,
});

export const setCurrentPage = (value: number) => ({
  type: types.SET_CURRENT_PAGE_NUMBER,
  value,
});

export const addIndices = (indices: string[]) => ({
  type: types.ADD_INDICES,
  indices,
});

export const removeIndices = (indices: string[]) => ({
  type: types.REMOVE_INDICES,
  indices,
});

export const selectPage = (idx: number) => ({
  type: types.SELECT_PAGE,
  pageNo: idx,
});

export const unselectPage = (idx: number) => ({
  type: types.UNSELECT_PAGE,
  pageNo: idx,
});

export const resetPages = () => ({
  type: types.RESET_PAGES,
});
