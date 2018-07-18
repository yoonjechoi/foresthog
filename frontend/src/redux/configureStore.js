import {applyMiddleware, combineReducers, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from 'react-thunk';

const env = process.env.NODE_ENV;

const middlewares = [thunk];

if (env === 'development') {
  const {logger} = require("redux-logger");
  middlewares.push(logger);
}

const reducer = combineReducers({});

let store;

if (env === 'development') {
  store = initialStatie => createStore(reducer, composeWithDevTools(applyMiddleware(...middlewares)));
} else {
  store = initialStatie => createStore(reducer, applyMiddleware(...middlewares));
}

export default store;
