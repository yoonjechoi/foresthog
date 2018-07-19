import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import {Provider} from 'react-redux';
import store from "redux/configureStore";

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import App from 'components/App';


ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App/>
    </Router>
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
