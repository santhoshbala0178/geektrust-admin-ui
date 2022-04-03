import React from "react";
import { screen, render, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import "@testing-library/jest-dom/extend-expect";
import { store } from "../../store";
import HomePage from "../HomePage";
import { ThemeProvider } from "styled-components";
import theme from "../Theme";
import { MOCK_USERS } from "../../constants/constants";

jest.mock("../../utils/utils", () => ({
  getUserData: () => {
    return MOCK_USERS;
  },

  capitalizeString: (value: string) => {
    //Capitalize the First letter in a string
    return `${value.slice(0, 1).toUpperCase()}${value.slice(1)}`;
  },
}));

const Wrapper = ({ children }: any) => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  </Provider>
);

describe("Delete User", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("User should be deleted on Delete button click", async () => {
    render(<HomePage />, { wrapper: Wrapper });
    const deleteUser = await screen.findAllByTestId("delete-user");
    let userRows = screen.getAllByTestId("user-row");

    expect(deleteUser).toBeTruthy();
    expect(userRows).toHaveLength(3);

    fireEvent.click(deleteUser[0]);

    userRows = screen.getAllByTestId("user-row");
    expect(userRows).toHaveLength(2);
  });
});
