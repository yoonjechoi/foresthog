import React, {Component} from "react";
import PropTypes from 'prop-types';
import Auth from './presenter';

// TODO: If the user is logged in, call API

class Container extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Auth {...this.props}/>
    );
  }
}

Container.propTypes = {
  onToggleAction: PropTypes.func.isRequired,
  action: PropTypes.string.isRequired
};

export default Container;
