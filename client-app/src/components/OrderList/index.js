import React, { PureComponent } from 'react';
import OrderDetails from '../OrderDetails';
import LoadingComponent from '../utils/Loading';
import Date from '../utils/Date';
import Currency from '../utils/Currency';
import { Table, Tr, Th, Td } from '../utils/Table/index.style';

class OrderList extends PureComponent {
  state = {
    openModal: false,
  };

  openDetails = orderId => {
    this.setState({ openModal: true });
  };

  closeDetails = () => {
    this.setState({ openModal: false });
  };

  render() {
    const { openModal } = this.state;
    const { loading, list } = this.props;

    if (loading) {
      return <LoadingComponent />;
    }

    if (!list.length) {
      return <div />;
    }

    return (
      <div>
        {openModal && <OrderDetails handleClose={this.closeDetails} />}
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
            {list.map(order => {
              return (
                <Tr key={order.id} onClick={() => this.openDetails(order.id)}>
                  <Td>
                    <Date date={order.date} />
                  </Td>
                  <Td>{order.name}</Td>
                  <Td>{order.phone}</Td>
                  <Td>{order.email}</Td>
                  <Td>
                    <Currency value={order.total} />
                  </Td>
                </Tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default OrderList;
