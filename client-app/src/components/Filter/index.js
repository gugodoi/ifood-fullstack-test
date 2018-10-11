import React, { PureComponent } from 'react';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import MuiPickersUtilsProvider from 'material-ui-pickers/utils/MuiPickersUtilsProvider';
import MomentUtils from 'material-ui-pickers/utils/moment-utils';
import { InlineDatePicker } from 'material-ui-pickers/DatePicker';

const FilterWrapper = styled.div`
  border: 1px solid #f1f1f1;
  border-radius: 15px;
  background-color: #fafafa;
  margin: 0 15px 50px 15px;
  padding: 10px;
`;
const FilterFields = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 25px;

  & > div {
    margin: 10px;
  }
`;
const FilterButton = styled.div`
  width: 100%;
  text-align: center;
`;

class Filter extends PureComponent {
  state = {
    startDate: new Date(),
    endDate: new Date(),
  };

  handleStartDateChange = date => {
    this.setState({ startDate: date });
  };

  handleEndDateChange = date => {
    this.setState({ endDate: date });
  };

  render() {
    const { startDate, endDate } = this.state;
    return (
      <FilterWrapper>
        <FilterFields>
          <MuiPickersUtilsProvider utils={MomentUtils}>
            <InlineDatePicker
              label="Start Date"
              value={startDate}
              format="DD/MM/YYYY"
              onChange={this.handleStartDateChange}
            />
          </MuiPickersUtilsProvider>
          <MuiPickersUtilsProvider utils={MomentUtils}>
            <InlineDatePicker
              label="End Date"
              format="DD/MM/YYYY"
              value={endDate}
              onChange={this.handleEndDateChange}
            />
          </MuiPickersUtilsProvider>
          <TextField
            id="client-name"
            label="Client Name"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            id="phone"
            label="Phone"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            id="email"
            label="E-mail"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </FilterFields>
        <FilterButton>
          <Button variant="contained">Search</Button>
        </FilterButton>
      </FilterWrapper>
    );
  }
}

export default Filter;
