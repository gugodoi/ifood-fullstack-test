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
    start: new Date(),
    end: new Date(),
    email: '',
    phone: '',
    name: '',
  };

  handleFieldChange = (input, event) => {
    const value = event.target.value;
    this.setState({ [input]: value });
  };

  handleDateChange = (input, value) => {
    this.setState({ [input]: value });
  };

  search = () => {
    this.props.callback(this.state);
  };

  render() {
    const { start, end } = this.state;
    return (
      <FilterWrapper>
        <FilterFields>
          <MuiPickersUtilsProvider utils={MomentUtils}>
            <InlineDatePicker
              label="Start Date"
              value={start}
              format="DD/MM/YYYY"
              onChange={start => this.handleDateChange('start', start)}
            />
          </MuiPickersUtilsProvider>
          <MuiPickersUtilsProvider utils={MomentUtils}>
            <InlineDatePicker
              label="End Date"
              format="DD/MM/YYYY"
              value={end}
              onChange={end => this.handleDateChange('end', end)}
            />
          </MuiPickersUtilsProvider>
          <TextField
            id="client-name"
            label="Client Name"
            InputLabelProps={{
              shrink: true,
            }}
            onChange={e => this.handleFieldChange('name', e)}
          />
          <TextField
            id="phone"
            label="Phone"
            InputLabelProps={{
              shrink: true,
            }}
            onChange={e => this.handleFieldChange('phone', e)}
          />
          <TextField
            id="email"
            label="E-mail"
            InputLabelProps={{
              shrink: true,
            }}
            type="email"
            onChange={e => this.handleFieldChange('email', e)}
          />
        </FilterFields>
        <FilterButton>
          <Button variant="contained" onClick={this.search}>
            Search
          </Button>
        </FilterButton>
      </FilterWrapper>
    );
  }
}

export default Filter;
