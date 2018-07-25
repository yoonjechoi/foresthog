import {connect} from "react-redux";
import Container from "./container";
import {toggleAction} from 'actions/authentication';

// Add all the actions for:
// Log in
// Sign up
// Recover Password
// Check username
// Check password

const mapStateToProps = (state, ownProps) => {
  const {authentication} = state;

  return {
    action: authentication.get('action')
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onToggleAction: () => {
      return dispatch(toggleAction())
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Container);
