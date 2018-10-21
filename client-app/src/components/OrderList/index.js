import React, { PureComponent } from 'react';
import OrderDetails from '../OrderDetails';
import LoadingComponent from '../utils/Loading';
import Date from '../utils/Date';
import Currency from '../utils/Currency';
import { Table, Thead, Tr, Th, Td } from '../utils/Table/index.style';

class OrderList extends PureComponent {
  state = {
    openModal: false,
    details: {},
    client: {},
  };

  openDetails = orderIndex => {
    const order = Object.assign({}, this.props.orders[orderIndex]);
    const client = Object.assign({}, this.props.clients[order.clientId]);
    this.setState({ openModal: true, details: order, client });
  };

  closeDetails = () => {
    this.setState({ openModal: false });
  };

  render() {
    const { openModal, details, client } = this.state;
    const { loading, orders, clients } = this.props;

    if (loading) {
      return <LoadingComponent />;
    }

    if (!orders || !orders.length) {
      return <div />;
    }

    return (
      <div>
        {openModal && (
          <OrderDetails
            handleClose={this.closeDetails}
            orderDetails={details}
            client={client}
          />
        )}
        <div>
          <Table>
            <Thead>
              <Tr>
                <Th>Date</Th>
                <Th>Client Name</Th>
                <Th>Phone</Th>
                <Th>E-mail</Th>
                <Th>Total value</Th>
              </Tr>
            </Thead>
            <tbody>
              {orders.map((order, index) => {
                const client = clients.find(
                  client => client.id === order.clientId
                );
                const total = order.items.reduce((acc, item) => {
                  return acc + item.quantity * item.price;
                }, 0);
                return (
                  <Tr key={index} onClick={() => this.openDetails(index)}>
                    <Td data-label="Date">
                      <Date date={order.confirmedAt} />
                    </Td>
                    <Td data-label="Client Name">{client.name}</Td>
                    <Td data-label="Phone">{client.phone}</Td>
                    <Td data-label="E-mail">{client.email}</Td>
                    <Td data-label="Total Value">
                      <Currency value={total} />
                    </Td>
                  </Tr>
                );
              })}
            </tbody>
          </Table>
        </div>
      </div>
    );
  }
}

export default OrderList;
