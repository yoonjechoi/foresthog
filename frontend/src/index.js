import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import store from "redux/configureStore";

import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import App from './App';


ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>

        <Route exact path="/" component={App}/>
      </div>
    </Router>

  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
