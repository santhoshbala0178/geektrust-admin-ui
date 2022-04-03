import { USERS_API } from "../constants/constants";

export const getUserData = async () => {
  const response = await fetch(USERS_API);
  const data = await response.json();

  return data;
};

export const capitalizeString = (value: string) => {
  //Capitalize the First letter in a string
  return `${value.slice(0, 1).toUpperCase()}${value.slice(1)}`;
};
