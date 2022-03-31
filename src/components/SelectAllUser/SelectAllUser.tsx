import React from "react";
import { connect, ConnectedProps } from "react-redux";
import {
  addIndices,
  removeIndices,
  selectPage,
  unselectPage,
} from "../../actions";
import { RootState } from "../../store";
import { SelectAllUserInput } from "./SelectAllUser.style";

const mapDispatchToProps = {
  addIndicesProp: addIndices,
  removeIndicesProp: removeIndices,
  selectPageProp: selectPage,
  unselectPageProp: unselectPage,
};

const mapStateToProps = (state: RootState) => ({
  userDetailsReducer: state.userDetailsReducer,
  pageDetailsReducer: state.pageDetailsReducer,
  userDeleteReducer: state.userDeleteReducer,
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type Props = ConnectedProps<typeof connector>;

const SelectAllUser = ({
  userDetailsReducer,
  pageDetailsReducer,
  userDeleteReducer,
  addIndicesProp,
  removeIndicesProp,
  selectPageProp,
  unselectPageProp,
}: Props) => {
  const getIndices = () => {
    let indices: string[] = [];
    userDetailsReducer.users
      .slice(pageDetailsReducer.startIndex, pageDetailsReducer.endIndex)
      .map((user) => indices.push(user.id));
    return indices;
  };

  const onUserSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      addIndicesProp(getIndices());
      selectPageProp(pageDetailsReducer.curPageNum);
    } else {
      removeIndicesProp(getIndices());
      unselectPageProp(pageDetailsReducer.curPageNum);
    }
  };
  return (
    <SelectAllUserInput
      type="checkbox"
      onChange={onUserSelect}
      checked={userDeleteReducer.pageSelected.includes(
        // If the current page is selected then the check box should be in checked state
        pageDetailsReducer.curPageNum
      )}
    />
  );
};

export default connector(SelectAllUser);
