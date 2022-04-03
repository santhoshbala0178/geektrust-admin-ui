import styled from "styled-components";

export const EditUserButton = styled.button`
  padding: 0.5em;
  border: none;
  outline: none;
  cursor: pointer;
  background: ${(props) => props.theme.colors.white};

  &: hover {
    background: ${(props) => props.theme.colors.blue};
    color: ${(props) => props.theme.colors.white};
  }
`;
