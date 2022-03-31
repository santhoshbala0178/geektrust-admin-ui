import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { RootState } from "../../store";
import { Delete } from "./DeleteButton.style";

const mapStateToProps = (state: RootState) => ({
  userDeleteReducer: state.userDeleteReducer,
});

const connector = connect(mapStateToProps);

type Props = ConnectedProps<typeof connector>;

const DeleteButton = ({ userDeleteReducer }: Props) => (
  <Delete
    type="button"
    disabled={userDeleteReducer.indicesToDelete.length === 0}
  >
    {"Delete Selected"}
  </Delete>
);

export default connector(DeleteButton);
