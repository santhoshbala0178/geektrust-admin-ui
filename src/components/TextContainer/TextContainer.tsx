import React from "react";
import { HEADER_COLUMNS } from "../../constants/constants";
import { Text } from "./TextContainer.style";
import { TextContainerType } from "./TextContainer.type";

const TextContainer = ({ name, value }: TextContainerType) => (
  <Text>
    {name === HEADER_COLUMNS[2].toLowerCase()
      ? `${value.slice(0, 1).toUpperCase()}${value.slice(1)}`
      : value}
  </Text>
);

export default TextContainer;
