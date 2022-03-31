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
  userDetailsReducer: state.userDetailsReducer,
  pageDetailsReducer: state.pageDetailsReducer,
  userDeleteReducer: state.userDeleteReducer,
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type Props = ConnectedProps<typeof connector> & SelectUserType;

const SelectUser = ({
  id,
  userDetailsReducer,
  pageDetailsReducer,
  userDeleteReducer,
  addIndicesProp,
  removeIndicesProp,
}: Props) => {
  const getIndices = () => {
    let indices: string[] = [];
    userDetailsReducer
      .slice(pageDetailsReducer.startIndex, pageDetailsReducer.endIndex)
      .map((user) => indices.push(user.id));
    return indices;
  };

  const onUserSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      if (id === "all") {
        addIndicesProp(getIndices());
      } else {
        addIndicesProp([id]);
      }
    } else {
      if (id === "all") {
        removeIndicesProp(getIndices());
      } else {
        removeIndicesProp([id]);
      }
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
