import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { deleteUsers, resetPages } from "../../actions";
import { DeleteUserIcon } from "./DeleteUser.style";
import { DeleteUserType } from "./DeleteUser.type";

const mapDispatchToProps = {
  deleteUsersProp: deleteUsers,
  resetPagesProp: resetPages,
};

const connector = connect(null, mapDispatchToProps);

type Props = ConnectedProps<typeof connector> & DeleteUserType;

const DeleteUser = ({ deleteUsersProp, resetPagesProp, id }: Props) => {
  const onDeleteUsers = () => {
    deleteUsersProp([id]);
    resetPagesProp();
  };
  return (
    <DeleteUserIcon
      type="button"
      onClick={onDeleteUsers}
      data-testid="delete-user"
    >
      <FontAwesomeIcon icon={faTrashCan} />
    </DeleteUserIcon>
  );
};

export default connector(DeleteUser);
