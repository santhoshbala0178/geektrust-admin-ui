import React from "react";
import { HeaderTextContainer } from "./HeaderText.style";
import { HeaderTextType } from "./HeaderText.type";

const HeaderText = ({ column }: HeaderTextType) => (
  <HeaderTextContainer>{column}</HeaderTextContainer>
);

export default HeaderText;
