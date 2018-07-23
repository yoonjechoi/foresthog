import React, {Component} from "react";
import PropTypes from "prop-types";
import SignupForm from "./presenter";


class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      name: "",
      username: "",
      password: ""
    };
  }

  render() {
    const {email, name, username, password} = this.state;
    return (
      <SignupForm
        emailValue={email}
        nameValue={name}
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
    const {createAccount} = this.props;
    const {email, username, password} = this.state;

    event.preventDefault();
    createAccount(email, username, password);
  };
}

Container.propTypes = {
  createAccount: PropTypes.func.isRequired
};


export default Container;
