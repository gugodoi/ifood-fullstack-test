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
  };

  openDetails = orderId => {
    const listDetails = this.props.list.filter(obj => obj.id === orderId)[0];
    this.setState({ openModal: true, details: listDetails });
  };

  closeDetails = () => {
    this.setState({ openModal: false });
  };

  render() {
    const { openModal, details } = this.state;
    const { loading, list } = this.props;

    if (loading) {
      return <LoadingComponent />;
    }

    if (!list.length) {
      return <div />;
    }

    return (
      <div>
        {openModal && (
          <OrderDetails handleClose={this.closeDetails} listDetails={details} />
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
              {list.map(order => {
                return (
                  <Tr key={order.id} onClick={() => this.openDetails(order.id)}>
                    <Td data-label="Date">
                      <Date date={order.date} />
                    </Td>
                    <Td data-label="Client Name">{order.client.name}</Td>
                    <Td data-label="Phone">{order.client.phone}</Td>
                    <Td data-label="E-mail">{order.client.email}</Td>
                    <Td data-label="Total Value">
                      <Currency value={order.total} />
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
