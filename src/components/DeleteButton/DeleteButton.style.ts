import styled from "styled-components";

export const Delete = styled.button`
  padding: 0.5em;
  border-radius: 10px;
  outline: none;
  border: 1px solid ${(props) => props.theme.colors.blue};
  background: ${(props) => props.theme.colors.white};
  cursor: pointer;

  &: hover {
    background: ${(props) => props.theme.colors.blue};
    color: ${(props) => props.theme.colors.white};
  }

  &: disabled {
    background: ${(props) => props.theme.colors.grey};
    border: 1px solid ${(props) => props.theme.colors.grey};
    color: ${(props) => props.theme.colors.grey};
    cursor: inherit;
  }
`;
