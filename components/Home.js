import React, { useState } from 'react';
import styles from '../styles/Home.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';

function Home() {
  const [message, setMessage] = useState('');
  const [remainingChars, setRemainingChars] = useState(280);

  const handleMessageChange = (event) => {
    const inputMessage = event.target.value;
    setMessage(inputMessage);
    setRemainingChars(280 - inputMessage.length);
  };

  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.containerLeft}>
          <header className={styles.header}>
            <img src="logo-twitter-blanc-png.png" alt="logo" className={styles.image} />
          </header>
          <div className={styles.vide}></div>
          <footer className={styles.footer}>
            <FontAwesomeIcon className={styles.logout} icon={faRightFromBracket} />
          </footer>
        </div>

        <div className={styles.containerCenter}>
          <h1 className={styles.title}>Home</h1>
          
          <div className={styles.addTweet}>
            <input className={styles.addmessage} type="text" placeholder=" What's up?"value={message} onChange={handleMessageChange} maxLength={280}/>
            <span className={styles.remainingChars}>{remainingChars}</span>
            <button className={styles.tweetButton} id="btn-add">Tweet</button>
          </div>

          <div></div>
          <div></div>
        </div>
        <div className={styles.containerRight}>
          <h1 className={styles.title}>Trends</h1>
        </div>
      </div>
    </div>
  );
}

export default Home;