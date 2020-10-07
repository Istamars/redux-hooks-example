import React from 'react';
import { Nav } from 'react-bootstrap';

class Component extends React.Component {
  state = {};

  render() {
    return (
      <Nav variant="tabs">
        <Nav.Item>
          <Nav.Link
            href="/"
            active={window.location.pathname === '/'}
            disabled={window.location.pathname === '/'}
            onClick={() => this.handleClick('/')}
          >
            User List
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            href="/add"
            active={window.location.pathname === '/add'}
            disabled={window.location.pathname === '/add'}
            onClick={() => this.handleClick('/add')}
          >
            Add
          </Nav.Link>
        </Nav.Item>
      </Nav>
    );
  }
}

export default Component;
