import { USERS_API } from "../constants/constants";

export const getUserData = async () => {
  const response = await fetch(USERS_API);
  const data = await response.json();

  return data;
};
