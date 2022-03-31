import styled from "styled-components";

export const SearchBarInput = styled.input`
  width: 100%;
  height: 2em;
  border-radius: 0.5em;
  box-shadow: ${(props) => props.theme.colors.grey} 0px 5px 15px;
  border: none;
  outline: none;
  padding: 0.5em;
  margin-bottom: 2em;
  align-self: center;

  &: hover {
    box-shadow: ${(props) => props.theme.colors.grey} 0px 10px 20px;
  }
`;
