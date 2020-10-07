import React from 'react';
import { Button, Card, CardContent, Grid, TextField } from '@material-ui/core';
import { Redirect } from 'react-router-dom';

import AuthAction from '../../actions/auth.action';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  formComponent: {
    margin: '8px 0 8px',
  },

  gridHeight: {
    height: '100%',
  },
}));

const AuthComponent = (props) => {
  const classes = useStyles();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = () => {
    props.logIn({ email, password });
  };

  const { isSignedIn } = props;

  if (isSignedIn === true) return <Redirect to="/not-found" />;
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

const logIn = AuthAction.logIn;

const mapStateToProps = (state) => {
  return { isSignedIn: state.auth };
};

export default connect(mapStateToProps, { logIn })(AuthComponent);
