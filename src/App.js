import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import AuthRoute from './components/Auth/route';
import { Router, Route, Switch } from 'react-router-dom';

import pages from './components/pages';
import history from './history';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//   },
//   paper: {
//     padding: theme.spacing(1),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
//   },
// }));

const App = () => {
  // const classes = useStyles();

  return (
    <Router history={history}>
      <Switch>
        <AuthRoute exact path="/" component={pages.Main} />
        <AuthRoute exact path="/about" component={pages.AboutUs} />
        <Route exact path="/auth" component={pages.AuthComponent} />
        <Route exact path="/not-found" component={pages.NotFound} />
        {/* <Route exact path="/" component={pages.Main} /> */}
      </Switch>
    </Router>
  );
};

export default App;
