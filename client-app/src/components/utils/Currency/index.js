import React, { Fragment, PureComponent } from 'react';

class Currency extends PureComponent {
  render() {
    const { value } = this.props;
    return (
      <Fragment>
        {value.toLocaleString('en-US', {
          style: 'currency',
          currency: 'USD',
        })}
      </Fragment>
    );
  }
}

export default Currency;
