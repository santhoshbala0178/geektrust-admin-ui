import React from "react";
import { faEdit } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { connect, ConnectedProps } from "react-redux";
import { editUser } from "../../actions";
import { EditUserButton } from "./EditUser.style";
import { EditUserType } from "./EditUser.type";

const mapDispatchToProps = {
  editUserProp: editUser,
};

const connector = connect(null, mapDispatchToProps);

type Props = ConnectedProps<typeof connector> & EditUserType;

const EditUser = ({ editUserProp, payload }: Props) => {
  const onEditUser = () => {
    editUserProp(payload);
  };

  return (
    <EditUserButton type="button" onClick={onEditUser}>
      <FontAwesomeIcon icon={faEdit} />
    </EditUserButton>
  );
};

export default connector(EditUser);
