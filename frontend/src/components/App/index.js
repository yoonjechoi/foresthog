import {connect} from "react-redux";
import Container from "./container";
import {whoAmIRequest} from "actions/authentication";

const mapStateToProps = (state, ownProps) => {
  return {
    isLoggedIn: state.authentication.get('isLoggedIn'),
    whoAmIStatus: state.authentication.getIn(['whoami', 'status'])
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    whoAmIRequest: () => {
      return dispatch(whoAmIRequest());
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Container);
