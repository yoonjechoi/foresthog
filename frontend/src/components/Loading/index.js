import React from 'react';
import styles from './styles.scss';


const Loading = props => (
  <div className={styles.container}>
    <img
      src={require("images/loading.png")}
      alt="Loading"
      className={styles.spinner}
    />
  </div>
);


export default Loading;
