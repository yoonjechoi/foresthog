import { connect} from "react-redux";
import Container from "./container";

import {loginRequest} from 'actions/authentication';

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    usernameLogin: (username, password) => {
      dispatch(loginRequest(username, password));
    },
  };
};

export default connect(null, mapDispatchToProps)(Container);
