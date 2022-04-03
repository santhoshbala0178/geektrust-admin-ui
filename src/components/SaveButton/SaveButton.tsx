import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { editUser, modifyUserData } from "../../actions";
import { ROLE_TYPES } from "../../constants/constants";
import { RootState } from "../../store";
import { Save } from "./SaveButton.style";

const mapStateToProps = (state: RootState) => ({
  userEditReducer: state.userEditReducer,
});

const mapDispatchToProps = {
  modifyUserDataProp: modifyUserData,
  editUserProp: editUser,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type Props = ConnectedProps<typeof connector>;

const SaveButton = ({
  userEditReducer,
  modifyUserDataProp,
  editUserProp,
}: Props) => {
  const onSaveUser = () => {
    modifyUserDataProp({
      ...userEditReducer,
    });
    editUserProp({ id: "", name: "", email: "", role: ROLE_TYPES.MEMBER_ROLE });
  };

  return (
    <Save type="button" onClick={onSaveUser}>
      {"Save"}
    </Save>
  );
};

export default connector(SaveButton);
