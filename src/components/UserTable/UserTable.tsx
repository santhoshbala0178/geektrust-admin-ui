import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { HEADER_COLUMNS, MAX_USER_COUNT } from "../../constants/constants";
import { RootState } from "../../store";
import HeaderText from "../HeaderText";
import SelectAllUser from "../SelectAllUser";
import SelectUser from "../SelectUser";
import TextContainer from "../TextContainer";
import {
  DataRow,
  Header,
  HeaderRow,
  RowText,
  UserTableContainer,
} from "./UserTable.style";

const mapStateToProps = (state: RootState) => ({
  userDetailsReducer: state.userDetailsReducer,
  pageDetailsReducer: state.pageDetailsReducer,
  userDeleteReducer: state.userDeleteReducer,
});

const connector = connect(mapStateToProps);

type Props = ConnectedProps<typeof connector>;

const UserTable = ({
  userDetailsReducer,
  pageDetailsReducer,
  userDeleteReducer,
}: Props) => {
  return (
    <UserTableContainer>
      <thead>
        <HeaderRow>
          <Header>
            <SelectAllUser />
          </Header>
          {HEADER_COLUMNS.map((column) => {
            return (
              <Header key={column}>
                <HeaderText column={column} />
              </Header>
            );
          })}
        </HeaderRow>
      </thead>
      <tbody>
        {userDetailsReducer.users && // Depending on the page number display the users
          userDetailsReducer.users
            .slice(pageDetailsReducer.startIndex, pageDetailsReducer.endIndex)
            .map((row) => {
              return (
                <DataRow
                  key={`row-${row.id}`}
                  rowHighlight={userDeleteReducer.indicesToDelete.includes(
                    row.id
                  )}
                >
                  <RowText>
                    <SelectUser id={`${row.id}`} />
                  </RowText>
                  <TextContainer
                    name={HEADER_COLUMNS[0].toLowerCase()}
                    value={row.name}
                  />
                  <TextContainer
                    name={HEADER_COLUMNS[1].toLowerCase()}
                    value={row.email}
                  />
                  <TextContainer
                    name={HEADER_COLUMNS[2].toLowerCase()}
                    value={row.role}
                  />
                  <RowText>Action</RowText>
                </DataRow>
              );
            })}
      </tbody>
    </UserTableContainer>
  );
};

export default connector(UserTable);
