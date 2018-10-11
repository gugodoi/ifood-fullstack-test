import React, { PureComponent } from 'react';
import styled from 'styled-components';
import LoadingComponent from '../utils/Loading';

const Table = styled.table`
  width: 100%;
  line-height: 2.25;
  text-align: center;
  font-size: 0.85rem;
  border: 1px solid #ccc;
  border-collapse: collapse;
  table-layout: fixed;
`;
const Tr = styled.tr`
  border: 1px solid #ddd;
  padding: 0.35em;
  :nth-child(even) {
    background: #f8f8f8;
  }
`;
const Th = styled.th`
  padding: 0.625em;
  background: #999;
  color: #fff;
  font-size: 0.85em;
  letter-spacing: 0.1em;
  text-transform: uppercase;
`;

const Td = styled.td`
  padding: 0.625em;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

class OrderList extends PureComponent {
  render() {
    const { loading } = this.props;

    if (loading) {
      return <LoadingComponent />;
    }

    return (
      <div>
        <Table>
          <thead>
            <Tr>
              <Th>Date</Th>
              <Th>Client Name</Th>
              <Th>Phone</Th>
              <Th>E-mail</Th>
              <Th>Total value</Th>
            </Tr>
          </thead>
          <tbody>
            <Tr>
              <Td>10/10/2018</Td>
              <Td>asdfasdfasdfadsf</Td>
              <Td>asdfasdfasdfadsf</Td>
              <Td>asdfasdfasdfadsf</Td>
              <Td>asdfasdfasdfadsf</Td>
            </Tr>
            <Tr>
              <Td>10/10/2018</Td>
              <Td>asdfasdfasdfadsf</Td>
              <Td>asdfasdfasdfadsf</Td>
              <Td>asdfasdfasdfadsf</Td>
              <Td>asdfasdfasdfadsf</Td>
            </Tr>
            <Tr>
              <Td>10/10/2018</Td>
              <Td>asdfasdfasdfadsf</Td>
              <Td>asdfasdfasdfadsf</Td>
              <Td>asdfasdfasdfadsf</Td>
              <Td>asdfasdfasdfadsf</Td>
            </Tr>
            <Tr>
              <Td>10/10/2018</Td>
              <Td>asdfasdfasdfadsf</Td>
              <Td>asdfasdfasdfadsf</Td>
              <Td>asdfasdfasdfadsf</Td>
              <Td>asdfasdfasdfadsf</Td>
            </Tr>
            <Tr>
              <Td>10/10/2018</Td>
              <Td>asdfasdfasdfadsf</Td>
              <Td>asdfasdfasdfadsf</Td>
              <Td>asdfasdfasdfadsf</Td>
              <Td>asdfasdfasdfadsf</Td>
            </Tr>
          </tbody>
        </Table>
      </div>
    );
  }
}

export default OrderList;
