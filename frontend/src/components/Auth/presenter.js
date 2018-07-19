import React from 'react';
import styles from './styles.scss';

const Auth = (props, context) => (
  <main className={styles.auth}>
    <div className={styles.column}>
      <img src={require("images/phone.png")} alt="Checkout our app. Is cool"/>
    </div>
    <div className={styles.column}>
      <div className={`${styles.whiteBox} {styles.formBox}`}>
        <img src={require("images/logo.png")} alt="Logo"/>
      </div>

    </div>
  </main>
);

Auth.propTypes = {
};

export default Auth;
