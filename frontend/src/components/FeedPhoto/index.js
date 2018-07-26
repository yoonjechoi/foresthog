import React from 'react';
import styles from './styles.scss';


const FeedPhoto = props => (
  <div className={styles.feedPhoto}>
    <header className={styles.header}>
      <img
        src={props.creator.profile_image || require("images/noPhoto.jpg")}
        alt={props.creator.username}
        className={styles.img}/>
      <div className={styles.headerColumn}>
        <span className={styles.creator}>{props.creator.username}</span>
        <span className={styles.location}>{props.location}</span>
      </div>
    </header>
    <img src={props.file} alt="props.caption"/>
    <div className={styles.meta}>

    </div>
  </div>

);

export default FeedPhoto;
