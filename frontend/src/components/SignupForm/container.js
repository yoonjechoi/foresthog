import React, {Component} from "react";
import PropTypes from "prop-types";
import SignupForm from "./presenter";
import {Map} from "immutable";


const initialState = Map({
  email: "",
  name: "",
  username: "",
  password: ""
})

class Container
  extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: initialState
    };
  }

  render() {
    const {email, name, username, password} = this.state.data.toJS();
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
    const {data} = this.state;
    const {target: {name, value}} = event;

    this.setState({
      data: data.set(name, value)
    });
  };

  _handleSubmit = event => {
    const {createAccount, onSignupSuccess} = this.props;
    const {data} = this.state;
    const {email, username, password} = data.toJS();

    event.preventDefault();
    createAccount(email, username, password)
      .then(() => {
        this.setState({
          data: initialState
        });

        onSignupSuccess();
      });
  };
}

Container.propTypes = {
  createAccount: PropTypes.func.isRequired,
  onSignupSuccess: PropTypes.func.isRequired
};


export default Container;
