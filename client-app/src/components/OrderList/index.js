import React, { PureComponent } from 'react';
import OrderDetails from '../OrderDetails';
import LoadingComponent from '../utils/Loading';
import Date from '../utils/Date';
import Currency from '../utils/Currency';
import { TableWrapper, Table, Tr, Th, Td } from '../utils/Table/index.style';

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
        <TableWrapper>
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
                    <Td>{order.client.name}</Td>
                    <Td>{order.client.phone}</Td>
                    <Td>{order.client.email}</Td>
                    <Td>
                      <Currency value={order.total} />
                    </Td>
                  </Tr>
                );
              })}
            </tbody>
          </Table>
        </TableWrapper>
      </div>
    );
  }
}

export default OrderList;
