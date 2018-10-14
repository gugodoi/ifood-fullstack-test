import React, { Component } from 'react';
import styled from 'styled-components';
import Filter from '../Filter';
import OrderList from '../OrderList';

const Header = styled.h1`
  text-align: center;
  letter-spacing: 0.1em;
`;

class App extends Component {
  state = {
    clients: [
      {
        id: 1,
        name: 'John Doe',
        email: 'john@doe.com',
        phone: '1234-5678',
      },
      {
        id: 2,
        name: 'Mary Doe',
        email: 'mary@doe.com',
        phone: '1234-8765',
      },
      {
        id: 3,
        name: 'Billy Bob',
        email: 'billy@bob.com',
        phone: '111-2345',
      },
    ],
    order: [
      {
        id: 1,
        date: '2018-11-01',
        clientId: 1,
        total: 55.0,
      },
      {
        id: 2,
        date: '2018-11-01',
        clientId: 2,
        total: 43.0,
      },
      {
        id: 3,
        date: '2018-11-02',
        clientId: 3,
        total: 99.0,
      },
      {
        id: 4,
        date: '2018-11-02',
        clientId: 1,
        total: 15.0,
      },
      {
        id: 5,
        date: '2018-11-02',
        clientId: 1,
        total: 28.0,
      },
      {
        id: 6,
        date: '2018-11-04',
        clientId: 1,
        total: 5.0,
      },
    ],
    filteredList: [],
  };

  filterList = ({ start, end, name, phone, email }) => {
    const list = [...this.state.order];
    this.setState({ filteredList: list });
  };

  render() {
    const { filteredList } = this.state;
    return (
      <div>
        <Header>Order List</Header>
        <Filter callback={this.filterList} />
        <OrderList list={filteredList} />
      </div>
    );
  }
}

export default App;
