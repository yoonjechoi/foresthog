import React from 'react';
import PropTypes from "prop-types";
import styles from './styles.scss';
import LoginForm from 'components/LoginForm';

const Auth = (props, context) => (
  <main className={styles.auth}>
    <div className={styles.column}>
      <img src={require("images/phone.png")} alt="Checkout our app. Is cool"/>
    </div>
    <div className={styles.column}>
      <div className={`${styles.whiteBox} {styles.formBox}`}>
        <img src={require("images/logo.png")} alt="Logo"/>
        {props.action == "login" && <LoginForm/>}
      </div>

    </div>
  </main>
);

Auth.propTypes = {
  changeAction: PropTypes.func.isRequired,
  action: PropTypes.string.isRequired
};

export default Auth;
