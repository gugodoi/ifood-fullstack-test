import React, { Component } from 'react';
import styled from 'styled-components';
import Filter from '../Filter';
import OrderList from '../OrderList';

const Header = styled.h1`
  text-align: center;
  letter-spacing: 0.1em;
`;

class App extends Component {
  render() {
    return (
      <div>
        <Header>Order List</Header>
        <Filter />
        <OrderList loading />
      </div>
    );
  }
}

export default App;
