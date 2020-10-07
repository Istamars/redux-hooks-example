import React from 'react';
import { Button, Modal } from 'react-bootstrap';

class Component extends React.Component {
  render() {
    return (
      <Modal show={this.props.show} onHide={this.props.onCloseClick}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.props.onCloseClick}>
            Close
          </Button>
          <Button variant="primary" onClick={this.props.onCloseClick}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default Component;
