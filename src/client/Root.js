import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './App';
import About from './views/About';
import LoginPage from './views/LoginPage/LoginPage'

const indexRoutes = [
  { path: "/login", name: "LoginPage", component: LoginPage },
  { path: "/about", name: "AboutPage", component: About },
  { path: "/", name: "Components", component: App }
];

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/about" component={About} />
        <Route path="/login" component={LoginPage} />
      </Switch>
    </Router>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired
};

export default Root;
