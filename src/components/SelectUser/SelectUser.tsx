import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { addIndices, removeIndices } from "../../actions";
import { RootState } from "../../store";
import { SelectUserInput } from "./SelectUser.style";
import { SelectUserType } from "./SelectUser.type";

const mapDispatchToProps = {
  addIndicesProp: addIndices,
  removeIndicesProp: removeIndices,
};

const mapStateToProps = (state: RootState) => ({
  userDeleteReducer: state.userDeleteReducer,
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type Props = ConnectedProps<typeof connector> & SelectUserType;

const SelectUser = ({
  id,
  userDeleteReducer,
  addIndicesProp,
  removeIndicesProp,
}: Props) => {
  const onUserSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      addIndicesProp([id]);
    } else {
      removeIndicesProp([id]);
    }
  };
  return (
    <SelectUserInput
      type="checkbox"
      onChange={onUserSelect}
      checked={userDeleteReducer.indicesToDelete.includes(id)}
    />
  );
};

export default connector(SelectUser);
