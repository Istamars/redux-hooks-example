import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import Navbar from "../../Navigation";
import Backlog from "../../SprintPlanning/backlogList";
import UserStory from "../../SprintPlanning/userStoryList";
import Info from "../../SprintPlanning/sprintInfo";
import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  Paper: {
    textAlign: "center",
    margin: "1rem 0rem 2rem 0rem",
    maxHeight: "24rem",
    height: "42vh",
    width: "50rem",
    padding: "2rem",
    borderRadius: "2rem",
  },
  container: {
    marginTop: "2rem",
  },
};

function index(props) {
  return (
    <>
      <Navbar></Navbar>
      {/* <Container> */}
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="flex-start"
        item
        xs={12}
        className={props.classes.container}
      >
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
          item
          xs={8}
        >
          <Grid item xs={12}>
            <Typography variant="h4" align="center">
              Backlog List
            </Typography>
            <Paper className={props.classes.Paper} elevation={3}>
              <Backlog></Backlog>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h4" align="center">
              User Story List
            </Typography>
            <Paper className={props.classes.Paper} elevation={3}>
              <Backlog></Backlog>
            </Paper>
          </Grid>
        </Grid>
        <Grid item xs={4}>
          <Info></Info>
        </Grid>
      </Grid>
      {/* </Container> */}
    </>
  );
}

export default withStyles(styles)(index);
