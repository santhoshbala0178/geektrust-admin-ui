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

describe("Delete All users", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("Users should be selected using select all and deleted on Delete Selected button click", async () => {
    render(<HomePage />, { wrapper: Wrapper });
    const deleteSelected = await screen.findByTestId("delete-selected");
    const selectAll = await screen.findByTestId("select-all");
    let userRows = screen.getAllByTestId("user-row");

    expect(deleteSelected).toBeDisabled();

    expect(userRows).toHaveLength(3);

    fireEvent.click(selectAll);

    expect(deleteSelected).not.toBeDisabled();
    fireEvent.click(deleteSelected);

    const users = screen.queryByTestId("user-row");
    expect(users).toBeNull();
  });

  it("Selected Users should be deleted on Delete Selected button click", async () => {
    render(<HomePage />, { wrapper: Wrapper });
    const deleteSelected = await screen.findByTestId("delete-selected");
    const selectUser = screen.getAllByTestId("select-user");
    let userRows = screen.getAllByTestId("user-row");

    expect(deleteSelected).toBeDisabled();
    expect(userRows).toHaveLength(3);

    fireEvent.click(selectUser[0]);

    expect(deleteSelected).not.toBeDisabled();
    fireEvent.click(deleteSelected);

    userRows = screen.getAllByTestId("user-row");
    expect(userRows).toHaveLength(2);
  });
});
