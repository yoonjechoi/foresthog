import {connect} from "react-redux";
import Container from "./container";
import {signupRequest} from 'actions/authentication';

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    createAccount: (email, username, password) => {
      return dispatch(signupRequest(email, username, password));
    },
  };
};

export default connect(null, mapDispatchToProps)(Container);
