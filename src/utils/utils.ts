import { USERS_API } from "../constants/constants";

export const getUserData = async () => {
  try {
    const response = await fetch(USERS_API);
    const data = await response.json();
    console.log(data);
    return data;
  } catch {
    console.log("Error in data fetching");
    return [];
  }
};

export const capitalizeString = (value: string) => {
  //Capitalize the First letter in a string
  return `${value.slice(0, 1).toUpperCase()}${value.slice(1)}`;
};
