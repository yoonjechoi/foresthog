import React, {Component} from 'react';
import PropTypes from "prop-types";
import styles from './styles.scss';
import LoginForm from 'components/LoginForm';
import SignupForm from 'components/SignupForm'

class Auth extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {action} = this.props;

    return (
      <main className={styles.auth}>
        <div className={styles.column}>
          <img src={require("images/phone.png")} alt="Checkout our app. Is cool"/>
        </div>
        <div className={styles.column}>
          <div className={`${styles.whiteBox} ${styles.formBox}`}>
            <img src={require("images/logo.png")} alt="Logo"/>
            {action == "login" && <LoginForm/>}
            {action == "signup" && <SignupForm/>}
          </div>
          <div className={styles.whiteBox}>
            {action == "login" && (
              <p className={styles.text}>
                Don't have an account? <span className={styles.changeLink}
                                             onClick={this.handleToggleAction}>Sign up</span>
              </p>
            )}

            {action == "signup" && (
              <p className={styles.text}>
                Have an account? <span className={styles.changeLink} onClick={this.handleToggleAction}>Log in</span>
              </p>
            )}
          </div>
          <div className={styles.appBox}>
            <span>Get the app</span>
            <div className={styles.appstores}>
              <img src={require("images/ios.png")} alt="Download it on the Apple Appstore"/>
              <img src={require("images/android.png")} alt="Download it on the Playstore"/>
            </div>
          </div>

        </div>
      </main>
    );
  }

  handleToggleAction = () => {
    const {onToggleAction} = this.props;
    onToggleAction();
  };
}


Auth.propTypes = {
  onToggleAction: PropTypes.func.isRequired,
  action: PropTypes.string.isRequired
};

export default Auth;
