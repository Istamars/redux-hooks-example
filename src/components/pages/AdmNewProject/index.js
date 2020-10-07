import React from "react";
import { Container } from "react-bootstrap";

import { connect } from "react-redux";
import authAction from "../../../actions/auth.action";

import Grid from "@material-ui/core/Grid";

import Navbar from "../../Navigation";
import Form from "../../../components/Form/newProjectForm";
import Member from "../../../components/Form/editProjectMember";

class Component extends React.Component {
  state = {};
  render() {
    return (
      <>
        <Navbar></Navbar>
        <Container>
          <Member></Member>
        </Container>
      </>
    );
  }
}

const addData = authAction.logIn;
export default connect(null, { addData })(Component);
