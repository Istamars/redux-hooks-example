import React from 'react';
import Form from '../Form';

import _ from 'lodash';
import { connect } from 'react-redux';
import userAction from '../../../actions';
import { Button, Modal } from 'react-bootstrap';

class Component extends React.Component {
  state = {
    show: false,
  };

  componentDidMount = () => {
    this.props.fetchData(this.props.userId);
  };

  onSubmit = (objectValue) => {
    this.props.editData(this.props.userId, objectValue);
  };

  handleClose = () => this.setState({ show: false });
  handleShow = () => this.setState({ show: true });

  render() {
    if (!this.props.user) return <div>Loading...</div>;
    return (
      <>
        <Button variant="secondary" size="sm" onClick={this.handleShow}>
          Edit
        </Button>

        <Modal
          show={this.state.show}
          backdrop="static"
          onHide={this.handleClose}
        >
          <Modal.Header closeButton>
            <Modal.Title>Edit Data</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form
              onSubmit={this.onSubmit}
              initialValue={_.pick(
                this.props.user,
                'name',
                'email',
                'phone_number',
                'address'
              )}
            />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { user: state.users[ownProps.userId] };
};

const fetchData = userAction.fetchData;
const editData = userAction.editData;

export default connect(mapStateToProps, { editData, fetchData })(Component);
