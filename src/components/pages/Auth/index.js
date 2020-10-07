import React from "react";
import { Card } from "react-bootstrap";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import authAction from "../../../actions/auth.action";
import Navbar from "../../Navigation";
import LoginCard from "../../Form/loginForm";
import Grid from "@material-ui/core/Grid";
import LogoMain from "../../../source/GSH-Main.png";

const useStyles = makeStyles((theme) => ({}));

class Component extends React.Component {
  state = {};

  render() {
    // const classes = useStyles();
    return (
      <>
        <Navbar></Navbar>

        <Grid container direction="row" justify="center" alignItems="center">
          <Grid item xs={6}>
            <img src={LogoMain} width={600}></img>
          </Grid>
          <Grid item xs={4}>
            <LoginCard></LoginCard>
          </Grid>
        </Grid>
      </>
    );
  }
}

const addData = authAction.logIn;
export default connect(null, { addData })(Component);
