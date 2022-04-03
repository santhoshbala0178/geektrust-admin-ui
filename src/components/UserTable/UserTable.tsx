import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { HEADER_COLUMNS } from "../../constants/constants";
import { RootState } from "../../store";
import DeleteUser from "../DeleteUser";
import EditUser from "../EditUser";
import HeaderText from "../HeaderText";
import SaveButton from "../SaveButton";
import SelectAllUser from "../SelectAllUser";
import SelectUser from "../SelectUser";
import TextContainer from "../TextContainer";
import {
  ActionContainer,
  DataRow,
  Header,
  HeaderRow,
  RowText,
  TableBody,
  UserTableContainer,
} from "./UserTable.style";

const mapStateToProps = (state: RootState) => ({
  userDetailsReducer: state.userDetailsReducer,
  pageDetailsReducer: state.pageDetailsReducer,
  userDeleteReducer: state.userDeleteReducer,
  userEditReducer: state.userEditReducer,
});

const connector = connect(mapStateToProps);

type Props = ConnectedProps<typeof connector>;

const UserTable = ({
  userDetailsReducer,
  pageDetailsReducer,
  userDeleteReducer,
  userEditReducer,
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
      <TableBody data-testid="user-table">
        {userDetailsReducer.users && // Depending on the page number display the users
          userDetailsReducer.users
            .filter((user) => user.display)
            .slice(pageDetailsReducer.startIndex, pageDetailsReducer.endIndex)
            .map((row) => {
              return (
                <DataRow
                  data-testid="user-row"
                  key={`row-${row.id}`}
                  rowHighlight={userDeleteReducer.indicesToDelete.includes(
                    row.id
                  )}
                >
                  <RowText>
                    <SelectUser id={`${row.id}`} />
                  </RowText>
                  <TextContainer
                    type={HEADER_COLUMNS[0].toLowerCase()}
                    value={row.name}
                    id={`${row.id}`}
                  />
                  <TextContainer
                    type={HEADER_COLUMNS[1].toLowerCase()}
                    value={row.email}
                    id={`${row.id}`}
                  />
                  <TextContainer
                    type={HEADER_COLUMNS[2].toLowerCase()}
                    value={row.role}
                    id={`${row.id}`}
                  />
                  <RowText>
                    <ActionContainer>
                      {userEditReducer.id === row.id ? (
                        <SaveButton />
                      ) : (
                        <EditUser
                          payload={{
                            name: row.name,
                            email: row.email,
                            role: row.role,
                            id: row.id,
                          }}
                        />
                      )}
                      <DeleteUser id={`${row.id}`} />
                    </ActionContainer>
                  </RowText>
                </DataRow>
              );
            })}
      </TableBody>
    </UserTableContainer>
  );
};

export default connector(UserTable);
