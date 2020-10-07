import React, { useEffect } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import { useSelector, useDispatch, connect } from 'react-redux';
// import { fetchProjects } from '../../actions/project.action';
import { makeStyles } from '@material-ui/core/styles';

import apis from '../../apis';
import actionType from '../../constant/action-types';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const Main = () => {
  const classes = useStyles();
  const projects = useSelector((state) => Object.values(state.projects));
  const dispatch = useDispatch();

  const fetchProjects = () => {
    return async (dispatch) => {
      const response = await apis.get('/project/2509200006');
      console.log('res', response);

      dispatch({
        type: actionType.FETCH_PROJECTS,
        payload: response.data,
      });
    };
  };

  useEffect(() => {
    dispatch(fetchProjects());
  }, []);

  console.log('pro', projects);

  // return <div>Loading...</div>;
  if (!Object.keys(projects).length) return <div>Loading...</div>;
  else
    return (
      <div className={classes.root}>
        Main Page
        <Grid container direction="row" justify="center" alignItems="center">
          {projects.map((project) => {
            return (
              <Grid item xs={12} sm={3} md={2}>
                <Paper className={classes.paper}>{project.projectName}</Paper>
              </Grid>
            );
          })}
        </Grid>
      </div>
    );
};

// const mapStateToProps = (state) => {
//   return { projects: state.projects };
// };

// export default connect(mapStateToProps, null)(Main);

export default Main;
