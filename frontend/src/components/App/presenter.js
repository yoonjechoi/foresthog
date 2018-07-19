import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from 'components/Footer';
import Auth from 'components/Auth';

const App = props => [
  props.isLoggedIn ? <PrivateRoutes key={2} /> :  <PublicRoutes key={2}/>,
  <Footer key={3}/>
];

App.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired
};


const PrivateRoutes = props => (
  <Switch>
    <h1>Private Routes</h1>
  </Switch>
);

const PublicRoutes = props => (
  <Switch>
    <Route exact path="/" component={Auth}/>
    <Route path="/recover" render={() => "recover password"}/>
  </Switch>
);

export default App;
