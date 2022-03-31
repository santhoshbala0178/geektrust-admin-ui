import * as types from "../constants/actionTypes";
import { UserDetails } from "../reducers/userDetailsReducer/userDetailsReducer.type";

export const setUsers = (users: UserDetails[]) => ({
  type: types.ADD_USERS,
  payload: {
    newData: users,
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