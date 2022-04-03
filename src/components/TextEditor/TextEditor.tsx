import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { saveEditedData, saveEditedRole } from "../../actions";
import { EDIT_EMAIL, EDIT_NAME } from "../../constants/actionTypes";
import {
  capitalizeString,
  HEADER_COLUMNS,
  ROLE_TYPES,
} from "../../constants/constants";
import { RootState } from "../../store";
import { RoleDropDown, TextInput } from "./TextEditor.style";
import { TextEditorType } from "./TextEditor.type";

const mapStateToProps = (state: RootState) => ({
  userEditReducer: state.userEditReducer,
});

const mapDispatchToProps = {
  saveEditedDataProp: saveEditedData,
  saveEditedRoleProp: saveEditedRole,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type Props = ConnectedProps<typeof connector> & TextEditorType;

const TextEditor = ({
  type,
  value,
  userEditReducer,
  saveEditedDataProp,
  saveEditedRoleProp,
}: Props) => {
  const onEditValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    switch (type) {
      case HEADER_COLUMNS[0].toLowerCase():
        saveEditedDataProp(EDIT_NAME, e.target.value);
        break;
      case HEADER_COLUMNS[1].toLowerCase():
        saveEditedDataProp(EDIT_EMAIL, e.target.value);
        break;
    }
  };

  const onRoleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    saveEditedRoleProp(e.target.value as ROLE_TYPES);
  };

  if (type === HEADER_COLUMNS[2].toLowerCase()) {
    return (
      <td>
        <RoleDropDown defaultValue={value} onChange={onRoleChange}>
          <option value={ROLE_TYPES.ADMIN_ROLE}>
            {capitalizeString(ROLE_TYPES.ADMIN_ROLE)}
          </option>
          <option value={ROLE_TYPES.MEMBER_ROLE}>
            {capitalizeString(ROLE_TYPES.MEMBER_ROLE)}
          </option>
        </RoleDropDown>
      </td>
    );
  }

  return (
    <td>
      <TextInput
        autoFocus={type === HEADER_COLUMNS[0].toLowerCase()}
        value={
          type === HEADER_COLUMNS[0].toLowerCase()
            ? userEditReducer.name
            : userEditReducer.email
        }
        onChange={onEditValue}
      />
    </td>
  );
};

export default connector(TextEditor);
