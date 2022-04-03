import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { filterAndSetPage } from "../../actions";
import { SearchBarInput } from "./SearchBar.style";

const mapDispatchToProps = {
  filterAndSetPageProp: filterAndSetPage,
};

const connector = connect(null, mapDispatchToProps);

type Props = ConnectedProps<typeof connector>;

const SearchBar = ({ filterAndSetPageProp }: Props) => {
  const filterUsers = (e: React.ChangeEvent<HTMLInputElement>) => {
    filterAndSetPageProp(e.target.value);
  };

  return (
    <SearchBarInput
      data-testid="search-input"
      placeholder="Search by name, email or role"
      onChange={filterUsers}
    />
  );
};

export default connector(SearchBar);
