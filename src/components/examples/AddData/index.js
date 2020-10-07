import React from 'react';
import Form from '../Form';

import { connect } from 'react-redux';
import userAction from '../../../actions';

class Component extends React.Component {
  onSubmit = (valueObject) => {
    this.props.addData(valueObject);
  };

  render() {
    return (
      <>
        <Form onSubmit={this.onSubmit} />
      </>
    );
  }
}

const addData = userAction.addData;

export default connect(null, { addData })(Component);
