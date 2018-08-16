import {connect} from 'react-redux';
import Container from './container';

const mapStateToProps = (state, ownProps) => {
  const {photos: {feed}} = state;
  return {feed};
};

const mapDispatchToPros = (dispatch, ownProps) => {
  return {
    getFeed: () => {
      dispatch(getFeed());
    }
  };
};


export default connect(mapStateToProps, mapDispatchToPros)(Container);
