import React, { PureComponent } from 'react';
import styled from 'styled-components';
import Modal from '@material-ui/core/Modal';
import { Table, Thead, Th, Td } from '../utils/Table/index.style';
import Currency from '../utils/Currency';

const ModalBody = styled.div`
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  padding: 32px;
  position: absolute;
  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2),
    0px 5px 8px 0px rgba(0, 0, 0, 0.14), 0px 1px 14px 0px rgba(0, 0, 0, 0.12);
  background-color: #fff;
`;

const Header = styled.header`
  font-size: 1.1rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 15px;
`;

const Fields = styled.span`
  font-weight: bold;
`;

const Details = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 15px;
  & > div {
    margin: 10px;
  }
`;

const TR = styled.tr`
  border: 1px solid #ddd;
  padding: 0.35em;
  :nth-child(even) {
    background: #f8f8f8;
  }
  @media screen and (max-width: 600px) {
    background: #f8f8f8;
    border-bottom: 3px solid #ddd;
    display: block;
    margin-bottom: 0.625em;
  }
`;

class OrderDetails extends PureComponent {
  render() {
    const { handleClose, listDetails } = this.props;
    return (
      <div>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={true}
          onClose={handleClose}
        >
          <ModalBody>
            <Header>Order Details</Header>
            <Details>
              <div>
                Client Name: <Fields>{listDetails.client.name}</Fields>
              </div>
              <div>
                Phone: <Fields>{listDetails.client.phone}</Fields>
              </div>
              <div>
                E-mail: <Fields>{listDetails.client.email}</Fields>
              </div>
            </Details>
            <div>
              <Table>
                <Thead>
                  <TR>
                    <Th>Description</Th>
                    <Th>Quantity</Th>
                    <Th>Unit Price</Th>
                    <Th>Total</Th>
                  </TR>
                </Thead>
                <tbody>
                  {listDetails.details.map(detail => (
                    <TR key={detail.id}>
                      <Td data-label="Description">{detail.description}</Td>
                      <Td data-label="quantity">{detail.quantity}</Td>
                      <Td data-label="Unit Price">
                        <Currency value={detail.unitPrice} />
                      </Td>
                      <Td data-label="Total">
                        <Currency value={detail.quantity * detail.unitPrice} />
                      </Td>
                    </TR>
                  ))}
                </tbody>
              </Table>
            </div>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default OrderDetails;
