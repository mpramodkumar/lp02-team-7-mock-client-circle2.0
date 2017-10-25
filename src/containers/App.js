import React, { Component } from 'react';
import { Route, withRouter } from 'react-router';
import LoginPage from './LoginPage';
import NotFound from '../components/NotFound';
import { Switch } from 'react-router-dom';

export class App extends Component {
  render() {
    return (
      <div className="app">
        <Switch>
          <Route exact path="/" component={LoginPage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="*" component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
