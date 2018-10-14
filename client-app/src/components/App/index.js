import React, { Component } from 'react';
import styled from 'styled-components';
import moment from 'moment';
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
        date: moment().format('YYYY-MM-DD'),
        clientId: 1,
        total: 55.0,
        details: [
          {
            id: 1,
            description: 'Item A',
            quantity: 1,
            unitPrice: 5.0,
          },
          {
            id: 2,
            description: 'Item B',
            quantity: 5,
            unitPrice: 10.0,
          },
        ],
      },
      {
        id: 2,
        date: moment().format('YYYY-MM-DD'),
        clientId: 2,
        total: 43.0,
        details: [
          {
            id: 1,
            description: 'Item A',
            quantity: 1,
            unitPrice: 5.0,
          },
          {
            id: 2,
            description: 'Item B',
            quantity: 5,
            unitPrice: 10.0,
          },
        ],
      },
      {
        id: 3,
        date: moment().format('YYYY-MM-DD'),
        clientId: 3,
        total: 99.0,
        details: [
          {
            id: 1,
            description: 'Item A',
            quantity: 1,
            unitPrice: 5.0,
          },
          {
            id: 2,
            description: 'Item B',
            quantity: 5,
            unitPrice: 10.0,
          },
        ],
      },
      {
        id: 4,
        date: moment().format('YYYY-MM-DD'),
        clientId: 1,
        total: 15.0,
        details: [
          {
            id: 1,
            description: 'Item A',
            quantity: 1,
            unitPrice: 5.0,
          },
          {
            id: 2,
            description: 'Item B',
            quantity: 5,
            unitPrice: 10.0,
          },
        ],
      },
      {
        id: 5,
        date: moment().format('YYYY-MM-DD'),
        clientId: 1,
        total: 28.0,
        details: [
          {
            id: 1,
            description: 'Item A',
            quantity: 1,
            unitPrice: 5.0,
          },
          {
            id: 2,
            description: 'Item B',
            quantity: 5,
            unitPrice: 10.0,
          },
        ],
      },
      {
        id: 6,
        date: moment().format('YYYY-MM-DD'),
        clientId: 1,
        total: 5.0,
        details: [
          {
            id: 1,
            description: 'Item A',
            quantity: 1,
            unitPrice: 5.0,
          },
          {
            id: 2,
            description: 'Item B',
            quantity: 5,
            unitPrice: 10.0,
          },
        ],
      },
    ],
    filteredList: [],
  };

  // TODO: move it to API gateway
  filterByValue = (array, key, value) => {
    if (!value) {
      return array;
    }
    return array.filter(obj =>
      obj[key].toLowerCase().includes(value.toLowerCase())
    );
  };

  // TODO: move it to API gateway
  filterListByClient = (list, clients) => {
    const clientsArray = {};
    let clientIds = [];
    clients.forEach(client => {
      clientsArray[client.id] = client;
      clientIds.push(client.id);
    });

    return list.filter(obj => {
      if (clientIds.includes(obj.clientId)) {
        obj.client = clientsArray[obj.clientId];
        return obj;
      }
      return false;
    });
  };

  filterByDate = (list, start, end) => {
    const startFormat = moment(start).format();
    const endFormat = moment(end).format();

    return list.filter(obj => {
      return moment(obj.date).isBetween(startFormat, endFormat, 'days', '[]');
    });
  };

  // TODO: move it to API gateway
  filterList = ({ start, end, name, phone, email }) => {
    let list = [...this.state.order];
    let clients = [...this.state.clients];

    list = this.filterByDate(list, start, end);

    clients = this.filterByValue(clients, 'name', name);
    clients = this.filterByValue(clients, 'phone', phone);
    clients = this.filterByValue(clients, 'email', email);

    list = this.filterListByClient(list, clients);
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
