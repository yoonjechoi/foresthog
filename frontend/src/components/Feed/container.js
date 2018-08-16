import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Feed from './presenter';
import styles from './styles.scss';

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }

  componentDidMount() {
    const {feed, getFeed} = this.props;

    if(feed) {
      this.setState({
        loading: true
      });
    } else {
      getFeed();
    }
  }

  render() {
    const {feed} = this.props;
    return (
      <Feed {...this.state} feed={feed} />
    );
  }
}

Container.propTypes = {
  getFeed: PropTypes.func.isRequired,
  feed: PropTypes.array
};

export default Container;
