import styled from 'styled-components';

export const Table = styled.table`
  width: 100%;
  line-height: 2.25;
  text-align: center;
  font-size: 0.85rem;
  border: 1px solid #ccc;
  border-collapse: collapse;
  table-layout: fixed;
`;
export const Tr = styled.tr`
  border: 1px solid #ddd;
  padding: 0.35em;
  :nth-child(even) {
    background: #f8f8f8;
  }
  :hover,
  :focus {
    background: lightyellow;
    cursor: pointer;
  }
`;
export const Th = styled.th`
  padding: 0.625em;
  background: #999;
  color: #fff;
  font-size: 0.85em;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  cursor: default;
`;

export const Td = styled.td`
  padding: 0.625em;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
