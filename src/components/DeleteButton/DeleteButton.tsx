import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { deleteUsers, resetPages, unselectPage } from "../../actions";
import { RootState } from "../../store";
import { Delete } from "./DeleteButton.style";

const mapStateToProps = (state: RootState) => ({
  userDeleteReducer: state.userDeleteReducer,
  pageDetailsReducer: state.pageDetailsReducer,
});

const mapDispatchToProps = {
  deleteUsersProp: deleteUsers,
  unselectPageProp: unselectPage,
  resetPagesProp: resetPages,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type Props = ConnectedProps<typeof connector>;

const DeleteButton = ({
  userDeleteReducer,
  pageDetailsReducer,
  deleteUsersProp,
  unselectPageProp,
  resetPagesProp,
}: Props) => {
  const onDeleteUsers = () => {
    deleteUsersProp(userDeleteReducer.indicesToDelete);
    unselectPageProp(pageDetailsReducer.curPageNum);
    resetPagesProp();
  };
  return (
    <Delete
      type="button"
      disabled={userDeleteReducer.indicesToDelete.length === 0}
      onClick={onDeleteUsers}
    >
      {"Delete Selected"}
    </Delete>
  );
};

export default connector(DeleteButton);
