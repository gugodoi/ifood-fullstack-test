import styled from 'styled-components';

export const Table = styled.table`
  line-height: 1.25;
  border: 1px solid #ccc;
  border-collapse: collapse;
  margin: 0;
  padding: 0;
  width: 100%;
  table-layout: fixed;

  @media screen and (max-width: 600px) {
    border: 0;
  }
`;

export const Thead = styled.thead`
  @media screen and (max-width: 600px) {
    border: none;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }
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
  @media screen and (max-width: 600px) {
    background: #f8f8f8;
    border-bottom: 3px solid #ddd;
    display: block;
    margin-bottom: 0.625em;
  }
`;
export const Th = styled.th`
  background: #999;
  padding: 0.625em;
  text-align: center;
  cursor: default;
  font-size: 0.85em;
  letter-spacing: 0.1em;
  text-transform: uppercase;
`;

export const Td = styled.td`
  padding: 0.625em;
  text-align: center;

  @media screen and (max-width: 600px) {
    border-bottom: 1px solid #ddd;
    display: block;
    font-size: 0.8em;
    text-align: right;
    ::before {
      /*
    * aria-label has no advantage, it won't be read inside a table
    content: attr(aria-label);
    */
      content: attr(data-label);
      float: left;
      font-weight: bold;
      text-transform: uppercase;
    }
    :last-child {
      border-bottom: 0;
    }
  }
`;
