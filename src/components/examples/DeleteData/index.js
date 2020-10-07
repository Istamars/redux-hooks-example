import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';

import { connect } from 'react-redux';
import userAction from '../../../actions';

class Component extends React.Component {
  state = { show: false };

  componentDidMount = () => {
    this.props.fetchData(this.props.userId);
  };

  hanldeDelete = () => {
    this.props.deleteData(this.props.userId);
  };

  handleClose = () => this.setState({ show: false });
  handleShow = () => this.setState({ show: true });

  render() {
    if (!this.props.user) return <div>Loading...</div>;
    return (
      <>
        <Button variant="danger" size="sm" onClick={this.handleShow}>
          Delete
        </Button>

        <Modal
          show={this.state.show}
          backdrop="static"
          onHide={this.handleClose}
        >
          <Modal.Header closeButton>
            <Modal.Title>Delete Data</Modal.Title>
          </Modal.Header>
          <Modal.Body>Confirm delete {this.props.user.name}?</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Cancel
            </Button>
            <Button variant="danger" onClick={this.hanldeDelete}>
              Delete
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
const deleteData = userAction.deleteData;

export default connect(mapStateToProps, { deleteData, fetchData })(
  withRouter(Component)
);
