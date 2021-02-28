import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import useStyles from '../appbar/appmenu.css';
import Register from '../components/login&Signup/register/Register';
import routeConfigURL from '../utils/route';
import Login from '../components/login&Signup/login/login';
import PageNotFoundComponent from '../components/login&Signup/pageNotFound/PageNotFoundComponent';

function AppRouter() {
  const classes = useStyles();
  let routePath = null;

  routePath = (
    <Switch>
      {/* Business Price Plan is not already selected */}
      <Route exact path="/" component={Login} />
      <Route path={routeConfigURL.REGISTRATION} component={Register} />
      <Route path="*" exact component={PageNotFoundComponent} />
    </Switch>
  );
  return (
    <div className={classes.root}>
      <CssBaseline />
      <main className={classes.content}>
        <BrowserRouter>{routePath}</BrowserRouter>
      </main>
    </div>
  );
};
export default AppRouter;