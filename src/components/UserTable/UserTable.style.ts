import styled from "styled-components";

export const UserTableContainer = styled.table`
  border-collapse: collapse;
  table-layout: fixed;
  width: 100%;
`;

export const TableBody = styled.tbody``;

export const Header = styled.th`
  padding: 1em 0;
  text-align: left;
`;

export const HeaderRow = styled.tr`
  border-bottom: 0.5px solid ${(props) => props.theme.colors.grey};
`;

export const DataRow = styled.tr<{ rowHighlight: boolean }>`
  border-bottom: 0.5px solid ${(props) => props.theme.colors.grey};
  background: ${(props) =>
    props.rowHighlight ? props.theme.colors.grey : props.theme.colors.white};
  &: hover {
    background: ${(props) => props.theme.colors.grey};
  }

  word-wrap: break-word;
`;

export const RowText = styled.td`
  padding: 1em 0em;
`;

export const ActionContainer = styled.div``;
