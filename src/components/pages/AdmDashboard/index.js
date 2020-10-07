import React from "react";
import { Container } from "react-bootstrap";

import { connect } from "react-redux";
import authAction from "../../../actions/auth.action";

import Divider from "@material-ui/core/Divider";

import Navbar from "../../Navigation";
import ProjectList from "../../ProjectList/admin";

class Component extends React.Component {
  state = {};
  render() {
    return (
      <>
        <Navbar></Navbar>
        <Container>
          <h2 style={{ margin: "3rem 5rem 1rem 5rem" }}>Project Active List</h2>
          <Divider></Divider>
          <ProjectList></ProjectList>
        </Container>
      </>
    );
  }
}

const addData = authAction.logIn;
export default connect(null, { addData })(Component);
