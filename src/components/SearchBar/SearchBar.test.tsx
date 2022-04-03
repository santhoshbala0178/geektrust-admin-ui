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

describe("User Search", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should filter the user table with the given text", async () => {
    render(<HomePage />, { wrapper: Wrapper });
    const searchUser = await screen.findByTestId("search-input");
    let userRows = screen.getAllByTestId("user-row");

    expect(searchUser).toBeTruthy();
    expect(userRows).toHaveLength(3);

    fireEvent.change(searchUser, { target: { value: "mock1" } });

    userRows = screen.getAllByTestId("user-row");
    expect(userRows).toHaveLength(1);
  });
});
