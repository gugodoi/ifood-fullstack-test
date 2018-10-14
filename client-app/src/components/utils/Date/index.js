import React, { Fragment, PureComponent } from 'react';
import moment from 'moment';

class Date extends PureComponent {
  render() {
    const { date } = this.props;
    return (
      <Fragment>{moment(date, 'YYYY-MM-DD').format('DD/MM/YYYY')}</Fragment>
    );
  }
}

export default Date;
