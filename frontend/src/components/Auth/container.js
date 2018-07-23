import React, {Component} from "react";
import Auth from './presenter';

// TODO: If the user is logged in, call API

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      action: "signup"
    };
  }

  render() {
    const {action} = this.state;
    return (
      <Auth action={action} changeAction={this._changeAction}/>
    );
  }

  _changeAction = () => {
    this.setState(prevState => {
      const {action} = prevState;

      switch (action) {
        case "login":
          return {
            action: "signup"
          };
        case "signup":
          return {
            action: "login"
          }
      }
    });
  };
}

export default Container;
