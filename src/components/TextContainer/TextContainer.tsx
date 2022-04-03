import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { capitalizeString } from "../../utils/utils";
import { RootState } from "../../store";
import TextEditor from "../TextEditor";
import { Text } from "./TextContainer.style";
import { TextContainerType } from "./TextContainer.type";
import { HEADER_COLUMNS } from "../../constants/constants";

const mapStateToProps = (state: RootState) => ({
  userEditReducer: state.userEditReducer,
});

const connector = connect(mapStateToProps);

type Props = ConnectedProps<typeof connector> & TextContainerType;

const TextContainer = ({ type, value, id, userEditReducer }: Props) => {
  if (userEditReducer.id === id) {
    // On click of edit make the fields editable
    return <TextEditor type={type} value={value} />;
  }

  return (
    <Text>
      {type === HEADER_COLUMNS[2].toLowerCase()
        ? capitalizeString(value)
        : value}
    </Text>
  );
};

export default connector(TextContainer);
