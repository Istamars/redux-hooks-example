import React from 'react';
import { Button, Card, CardContent, Grid, TextField } from '@material-ui/core';
import { Redirect } from 'react-router-dom';

import AuthAction from '../../actions/auth.action';
import history from '../../history';
import { connect, useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import apis from '../../apis';
import actionType from '../../constant/action-types';

const useStyles = makeStyles((theme) => ({
  formComponent: {
    margin: '8px 0 8px',
  },

  gridHeight: {
    height: '100%',
  },
}));

const AuthComponent = () => {
  const classes = useStyles();
  const user = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const logIn = (formData) => {
    return async (dispatch) => {
      console.log(formData);
      const response = await apis.post('/auth/login', formData);

      dispatch({
        type: actionType.LOG_IN,
        payload: response.data,
      });

      alert('response', response.data);
      history.push('/');
    };
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(logIn({ email, password }));
  };

  console.log('user', user);

  // if (user.isSignedIn === true) return <Redirect to="/not-found" />;
  // else
  return (
    <Grid
      className={classes.gridHeight}
      container
      direction="row"
      justify="center"
      alignItems="center"
    >
      <Grid item xs={10} sm={6} md={3}>
        <Card>
          <CardContent>
            <form noValidate autoComplete="off" onSubmit={handleSubmit}>
              <div>
                <TextField
                  className={classes.formComponent}
                  id="standard-basic"
                  label="email"
                  size="small"
                  value={email}
                  onChange={handleEmailChange}
                  fullWidth
                />
              </div>
              <div>
                <TextField
                  className={classes.formComponent}
                  id="standard-basic"
                  label="password"
                  size="small"
                  value={password}
                  onChange={handlePasswordChange}
                  fullWidth
                />
              </div>
              <div>
                <Button
                  className={classes.formComponent}
                  variant="contained"
                  color="primary"
                  onClick={handleSubmit}
                  fullWidth
                >
                  Login
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default AuthComponent;
