import styled from "styled-components";

export const PageNumberButton = styled("button")<{ isSelected: boolean }>`
  padding: 1em;
  outline: none;
  border: 1px solid ${(props) => props.theme.colors.blue};
  background: ${(props) =>
    props.isSelected ? props.theme.colors.blue : props.theme.colors.background};
  color: ${(props) =>
    props.isSelected
      ? props.theme.colors.background
      : props.theme.colors.black};
  border-radius: 50%;
  width: 10px;
  height: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &: hover {
    background: ${(props) => props.theme.colors.blue};
    color: ${(props) => props.theme.colors.background};
  }

  &: disabled {
    background: ${(props) => props.theme.colors.grey};
    border: ${(props) => props.theme.colors.grey};
    color: ${(props) => props.theme.colors.grey};
    cursor: inherit;
  }
`;
