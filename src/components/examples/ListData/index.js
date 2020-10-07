import React from 'react';
import { ListGroup, ButtonGroup, Spinner } from 'react-bootstrap';
// import { Link, withRouter } from 'react-router-dom';
// import Modal from '../Modal';
import EditData from '../EditData';
import DeleteData from '../DeleteData';

import { connect } from 'react-redux';
import userAction from '../../../actions';

class Component extends React.Component {
  componentDidMount() {
    this.props.fetchDatas();
  }

  renderList = () => {
    return this.props.users.map((user) => {
      return (
        <ListGroup.Item key={user.userID}>
          <h5 className="user">
            {user.userName}
            <span className="user-email">{` <${user.email}>`}</span>
          </h5>
          {/* <div className="right-pos">
            <ButtonGroup aria-label="Basic example">
              <EditData userId={user.userID} />
              <DeleteData userId={user.userID} />
            </ButtonGroup>
          </div> */}
        </ListGroup.Item>
      );
    });
  };

  render() {
    console.log(this.props.users);
    if (!this.props.users) {
      return (
        <div className="middle center">
          <Spinner animation="grow" variant="info" />
        </div>
      );
    } else {
      return <ListGroup>{this.renderList()}</ListGroup>;
    }
  }
}

const mapStateToProps = (state) => {
  return { users: Object.values(state.users) };
};

const fetchDatas = userAction.fetchDatas;

export default connect(mapStateToProps, { fetchDatas })(Component);
