import React, {Component} from "react";
import PropTypes from "prop-types";
import LoginForm from "./presenter";


class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  render() {
    const {username, password} = this.state;
    return (
      <LoginForm
        usernameValue={username}
        passwordValue={password}
        handleInputChange={this._handleInputChange}
        handleSubmit={this._handleSubmit}/>
    );
  }

  _handleInputChange = event => {
    const {target: {name, value}} = event;
    this.setState({
      [name]: value
    });
  };

  _handleSubmit = event => {
    const {usernameLogin} = this.props;
    const {username, password} = this.state;

    event.preventDefault();
    usernameLogin(username, password);
  };
}

Container.propTypes = {
  usernameLogin: PropTypes.func.isRequired
};


export default Container;
