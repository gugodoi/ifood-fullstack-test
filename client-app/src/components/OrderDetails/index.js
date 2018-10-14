import React, { PureComponent } from 'react';
import styled from 'styled-components';
import Modal from '@material-ui/core/Modal';
import { Table, Tr, Th, Td } from '../utils/Table/index.style';

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
`;

class OrderDetails extends PureComponent {
  render() {
    const { handleClose } = this.props;
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
              <div>Client Name: John Doe</div>
              <div>Phone: 1234-5678</div>
              <div>E-mail: john@doe.com</div>
            </Details>
            <div>
              <Table>
                <thead>
                  <TR>
                    <Th>Description</Th>
                    <Th>Quantity</Th>
                    <Th>Unit Price</Th>
                    <Th>Total</Th>
                  </TR>
                </thead>
                <tbody>
                  <TR>
                    <Td>Item A</Td>
                    <Td>1</Td>
                    <Td>5.00</Td>
                    <Td>5.00</Td>
                  </TR>
                  <TR>
                    <Td>Item B</Td>
                    <Td>5</Td>
                    <Td>10.00</Td>
                    <Td>50.00</Td>
                  </TR>
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
