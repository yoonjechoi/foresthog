import React, {Component} from "react";
import PropTypes from 'prop-types';
import App from './presenter';
import {KEY_AUTH_DATA} from "actions/authentication";

// TODO: If the user is logged in, call API

class Container extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (KEY_AUTH_DATA in localStorage) {
      const {whoAmIRequest} = this.props;
      whoAmIRequest();
    }

  }

  render() {
    const {isLoggedIn, whoAmIStatus} = this.props;



    return (
      <App isLoggedIn={isLoggedIn} whoAmIStatus={whoAmIStatus}/>
    );
  }
}

Container.propTypes = {
  whoAmIRequest: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  whoAmIStatus: PropTypes.string.isRequired,
};

export default Container;
