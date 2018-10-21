import React, { Component } from 'react';
import styled from 'styled-components';
import moment from 'moment';
import axios from 'axios';
import Filter from '../Filter';
import OrderList from '../OrderList';

const Header = styled.h1`
  text-align: center;
  letter-spacing: 0.1em;
`;

class App extends Component {
  state = {
    orders: [],
    clients: [],
  };

  filterList = filter => {
    const params = Object.assign({}, filter);
    params.start = moment(params.start).format('MM/dd/YYYY');
    params.end = moment(params.end).format('MM/dd/YYYY');

    axios
      .get('http://localhost:3001/api/orders/', {
        params,
      })
      .then(response => {
        const { orders, clients } = response.data;
        this.setState({ orders, clients });
      });
  };

  render() {
    const { orders, clients } = this.state;
    return (
      <div>
        <Header>Order List</Header>
        <Filter callback={this.filterList} />
        <OrderList orders={orders} clients={clients} />
      </div>
    );
  }
}

export default App;
