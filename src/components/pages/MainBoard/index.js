import React from "react";

import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import Navbar from "../../Navigation";
import { Link } from "react-router-dom";
import Card from "../../Board/card";
import Task from "../../Board/task";
import SprintMenu from "../../Board/sprintMenus";
import task from "../../Board/task";

const columns = [
  { id: "taskID", label: "taskName", status: "status", minWidth: 170 },
];

function createData(taskID, taskName, status) {
  return { taskID, taskName, status };
}

const rows = [
  createData("t10101", "Membuat FE login", "on progress"),
  createData("t10102", "Membuat BE login", "to do"),
  createData("t10201", "Membuat FE signup", "on progress"),
  createData("t10202", "Membuat BE signup", "on revieww"),
  createData("t20201", "Membuat database users", "to do"),
  createData("t30101", "Membuat FE dashboard admin", "complete"),
  createData("t30102", "Membuat BE dashboard admin", "on review"),
  createData("t30103", "Membuat previllage khusus admin", "on progress"),
];

function index() {
  return (
    <>
      <Navbar></Navbar>
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid item xs={6}>
          <Typography
            variant="h4"
            align="center"
            style={{ margin: "2rem 0 1rem 0" }}
          >
            Sprint Board
            <SprintMenu></SprintMenu>
          </Typography>

          <Divider></Divider>
        </Grid>
      </Grid>
      <Grid container direction="row" justify="center" alignItems="center">
        {/* <div style={{ display: "flex", overflow: "hidden" }}> */}
        <Grid item xs={3}>
          <Typography
            variant="h6"
            align="center"
            style={{ margin: "2rem 0 1rem 0" }}
          >
            To Do
          </Typography>
          <Card id="card-1" className="card">
            {rows.map((row) => {
              if (row.status === "to do") {
                const taskName = row.taskName;
                const color = "#FFC785";
                return (
                  <Task
                    id={row.taskID}
                    key={row.taskID}
                    className="task"
                    draggable="true"
                    style={{ backgroundColor: "#7189BF" }}
                  >
                    <p>{taskName}</p>
                  </Task>
                );
              }
              // continue;
            })}
          </Card>
        </Grid>

        <Grid item xs={3}>
          <Typography
            variant="h6"
            align="center"
            style={{ margin: "2rem 0 1rem 0" }}
          >
            On Progress
          </Typography>

          <Card id="card-2" className="card">
            {rows.map((row) => {
              if (row.status === "on progress") {
                const taskName = row.taskName;
                const color = "#FFC785";
                return (
                  <Task
                    id={row.taskID}
                    key={row.taskID}
                    className="task"
                    draggable="true"
                    style={{ backgroundColor: "#FFC785" }}
                  >
                    <p>{taskName}</p>
                  </Task>
                );
              }
              // continue;
            })}
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Typography
            variant="h6"
            align="center"
            style={{ margin: "2rem 0 1rem 0" }}
          >
            On Review
          </Typography>
          <Card id="card-3" className="card">
            {rows.map((row) => {
              if (row.status === "on review") {
                const taskName = row.taskName;
                const color = "#FFC785";
                return (
                  <Task
                    id={row.taskID}
                    key={row.taskID}
                    className="task"
                    draggable="true"
                    style={{ backgroundColor: "#B9CEEB" }}
                  >
                    <p>{taskName}</p>
                  </Task>
                );
              }
              // continue;
            })}
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Typography
            variant="h6"
            align="center"
            style={{ margin: "2rem 0 1rem 0" }}
          >
            Complete
          </Typography>
          <Card id="card-4" className="card">
            {rows.map((row) => {
              if (row.status === "complete") {
                const taskName = row.taskName;
                const color = "#FFC785";
                return (
                  <Task
                    id={row.taskID}
                    key={row.taskID}
                    className="task"
                    draggable="true"
                    style={{ backgroundColor: "#72D6C9" }}
                  >
                    <p>{taskName}</p>
                  </Task>
                );
              }
              // continue;
            })}
          </Card>
        </Grid>
      </Grid>
    </>
  );
}

export default index;
