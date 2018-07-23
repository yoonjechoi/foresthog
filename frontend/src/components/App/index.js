import {connect} from "react-redux";
import Container from "./container";

const mapStateToProps = (state, ownProps) => {

  return {
    isLoggedIn: state.authentication.isLoggedIn
  };
};

export default connect(mapStateToProps)(Container);
