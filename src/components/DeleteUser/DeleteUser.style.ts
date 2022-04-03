import styled from "styled-components";

export const DeleteUserIcon = styled.button`
  padding: 0.5em;
  border: none;
  outline: none;
  cursor: pointer;
  background: ${(props) => props.theme.colors.background};

  &: hover {
    background: ${(props) => props.theme.colors.blue};
    color: ${(props) => props.theme.colors.background};
  }
`;
